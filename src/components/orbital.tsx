"use client";

import rawData from "@/python/orbital.json";
import type { Shaders } from "@/lib";
import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Data3DTexture, LinearFilter, RedFormat } from "three";
import { Color, GLSL3, Mesh, Vector3, BackSide } from "three";
import { getColor } from "./color-state";

export function Orbital({ shaders }: { shaders: Shaders }) {
  return (
    <div className="absolute top-0 w-full h-full">
      <Canvas>
        <OrbitalObject shaders={shaders}></OrbitalObject>
      </Canvas>
    </div>
  );
}

export function OrbitalObject({ shaders }: { shaders: Shaders }) {
  const size = 32;
  const data = new Uint8Array(size * size * size);
  data.map((_, i) => (data[i] = rawData[i]));

  const texture = new Data3DTexture(data, size, size, size);
  texture.format = RedFormat;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;

  const mesh = useRef<Mesh>(null);
  const color = getColor();

  useFrame(({ clock, pointer, camera }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = -pointer.y;
    mesh.current.rotation.y = clock.elapsedTime + pointer.x;
    // @ts-ignore
    mesh.current.material.uniforms.cameraPos.value.copy(camera.position);
  });

  return (
    <mesh ref={mesh} scale={5}>
      <boxGeometry></boxGeometry>
      <rawShaderMaterial
        args={[
          {
            glslVersion: GLSL3,
            uniforms: {
              base: { value: new Color(color) },
              map: { value: texture },
              cameraPos: { value: new Vector3() },
              threshold: { value: 0.2 },
              opacity: { value: 0.01 },
              range: { value: 0.1 },
              steps: { value: 100 },
              frame: { value: 0 },
            },
            vertexShader: shaders.vertex,
            fragmentShader: shaders.fragment,
            side: BackSide,
            transparent: true,
          },
        ]}
      ></rawShaderMaterial>
    </mesh>
  );
}
