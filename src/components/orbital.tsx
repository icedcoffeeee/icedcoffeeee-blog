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
      <Canvas
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), white, rgba(0,0,0,0))",
        }}
      >
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

  useFrame(({ clock, camera }) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = 0.001 * window.scrollY;
    mesh.current.rotation.y = 0.5 * clock.elapsedTime;
    // @ts-ignore
    mesh.current.material.uniforms.cameraPos.value.copy(camera.position);
  });

  return (
    <mesh ref={mesh} scale={10}>
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
