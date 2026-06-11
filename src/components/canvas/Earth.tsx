"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// CanvasLoader component
const CanvasLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full absolute inset-0 z-10 bg-black-200/20 backdrop-blur-sm">
      <span className="canvas-loader" />
      <p className="text-xs text-virescent-mint font-semibold mt-3">Loading Earth...</p>
    </div>
  );
};

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // @ts-ignore
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

export default function EarthCanvas() {
  return (
    <div className="relative w-full h-full min-h-[350px]">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          shadows
          frameloop="always"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}

