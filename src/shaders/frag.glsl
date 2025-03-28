precision highp float;
precision highp sampler3D;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

in vec3 vOrigin;
in vec3 vDirection;

out vec4 color;

uniform vec3 base;
uniform sampler3D map;

uniform float threshold;
uniform float range;
uniform float opacity;
uniform float steps;

vec2 hitBox(vec3 orig, vec3 dir) {
  const vec3 box_min = vec3(-0.5);
  const vec3 box_max = vec3(0.5);
  vec3 inv_dir = 1.0 / dir;
  vec3 tmin_tmp = (box_min - orig) * inv_dir;
  vec3 tmax_tmp = (box_max - orig) * inv_dir;
  vec3 tmin = min(tmin_tmp, tmax_tmp);
  vec3 tmax = max(tmin_tmp, tmax_tmp);
  float t0 = max(tmin.x, max(tmin.y, tmin.z));
  float t1 = min(tmax.x, min(tmax.y, tmax.z));
  return vec2(t0, t1);
}

float sample1(vec3 p) { return texture(map, p).r; }

float shading(vec3 coord) {
  float step = 0.01;
  return sample1(coord + vec3(-step)) - sample1(coord + vec3(step));
}

vec4 linearToSRGB(in vec4 value) {
  return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055),
                  value.rgb * 12.92,
                  vec3(lessThanEqual(value.rgb, vec3(0.0031308)))),
              value.a);
}

void main() {
  vec3 rayDir = normalize(vDirection);
  vec2 bounds = hitBox(vOrigin, rayDir);

  if (bounds.x > bounds.y)
    discard;

  bounds.x = max(bounds.x, 0.0);

  vec3 p = vOrigin + bounds.x * rayDir;
  vec3 inc = 1.0 / abs(rayDir);
  float delta = min(inc.x, min(inc.y, inc.z));
  delta /= steps;

  vec4 ac = vec4(base, 0.0);

  for (float t = bounds.x; t < bounds.y; t += delta) {
    float d = sample1(p + 0.5);
    d = smoothstep(threshold - range, threshold + range, d) * opacity;

    float col = shading(p + 0.5) * 3.0 + ((p.x + p.y) * 0.25) + 0.2;
    ac.rgb += (1.0 - ac.a) * d * col;
    ac.a += (1.0 - ac.a) * d;

    if (ac.a >= 0.95)
      break;
    p += rayDir * delta;
  }

  color = linearToSRGB(ac);
  if (color.a == 0.0)
    discard;
}
