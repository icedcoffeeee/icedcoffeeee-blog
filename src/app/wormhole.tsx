"use client";

import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { EllipseCurve, Group, Line, Vector2, Vector3 } from "three";

export function WormHole() {
  return (
    <div
      id="canvas-container"
      className="absolute top-0 -z-10 w-svw h-svh transition-opacity fade"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), white, rgba(0,0,0,0))",
      }}
    >
      <Canvas camera={{ rotation: [0, 0, 0.4] }}>
        <WormHoleObject></WormHoleObject>
      </Canvas>
    </div>
  );
}

function WormHoleObject() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = 0.1 * clock.elapsedTime;
    group.current.rotation.x = -0.001 * window.scrollY - 0.8;
  });

  const N = 40;
  const z_ = Array(N + 1)
    .fill(0)
    .map((_, i) => ((i / N) * 2 - 1) * 3);
  const r_ = (z: number) => Math.pow(Math.tan((z * Math.PI) / 2 / 3), 2) + 0.05;

  return (
    <group ref={group}>
      {z_.map((z, i) => {
        const r = r_(z);
        const points = z_.map((z) => new Vector3(r_(z), 0, z));
        return (
          <Fragment key={i}>
            <Circle radius={r} position={[0, 0, z]}></Circle>
            <LineF
              points={points}
              rotation={[0, 0, (i / N) * 2 * Math.PI]}
            ></LineF>
          </Fragment>
        );
      })}
    </group>
  );
}

type Circle = {
  radius?: number;
  position?: number[];
  rotation?: number[];
};
function Circle({ radius, ...props }: Circle) {
  const curve = new EllipseCurve(0, 0, radius, radius);
  return <LineF points={curve.getPoints(100)} {...props}></LineF>;
}

type LineF = {
  points: Vector3[] | Vector2[];
  position?: number[];
  rotation?: number[];
};
function LineF({ points, ...props }: LineF) {
  const line = useRef<Line>(null);
  useLayoutEffect(() => {
    if (!line.current) return;
    line.current.geometry.setFromPoints(points);
  });

  const media = window.matchMedia("(prefers-color-scheme: light)");
  const set = () => (media.matches ? "#000000" : "#ffffff");
  let [color, setColor] = useState(set());
  media.addEventListener("change", () => setColor(set()));

  return (
    // @ts-ignore
    <line ref={line} {...props}>
      <bufferGeometry></bufferGeometry>
      <lineBasicMaterial
        color={color}
        opacity={0.5}
        transparent
      ></lineBasicMaterial>
    </line>
  );
}
