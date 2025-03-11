"use client";

import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { EllipseCurve, Group, Line, Vector2, Vector3 } from "three";

export function WormHoleDisplay() {
  return (
    <div
      id="canvas-container"
      className="absolute top-0 -z-10 w-screen h-screen"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), white, rgba(0,0,0,0))",
      }}
    >
      <Canvas camera={{ rotation: [0, 0, 0.4] }}>
        <WormHole></WormHole>
      </Canvas>
    </div>
  );
}

function WormHole() {
  const N = 40;
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = 0.1 * clock.elapsedTime;
      group.current.rotation.x = -0.001 * window.scrollY - 0.8;
    }
  });
  const z = (i: number) => ((i / N) * 2 - 1) * 3;
  const func = (z: number) =>
    Math.pow(Math.tan((z * Math.PI) / 2 / 3), 2) + 0.05;
  const getArr = () => Array(N + 1).fill(0);

  return (
    <group ref={group} scale={1}>
      {getArr().map((_, i) => {
        const r = func(z(i));
        const points = getArr().map((_, i) => new Vector3(func(z(i)), 0, z(i)));
        return (
          <Fragment key={i}>
            <Circle radius={r} position={[0, 0, z(i)]}></Circle>
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
    if (line.current) line.current.geometry.setFromPoints(points);
  });

  const media = window.matchMedia("(prefers-color-scheme: light)");
  let [color, setColor] = useState(media.matches ? "#000000" : "#ffffff");
  media.addEventListener("change", () =>
    setColor(media.matches ? "#000000" : "#ffffff"),
  );

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
