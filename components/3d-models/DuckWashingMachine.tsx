"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MeshComponent() {
  const fileUrl = "/duck_laundry/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.x = 0;
    mesh.current.rotation.y = 175.5;
    mesh.current.position.z = -2;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function DuckWashingMachine() {
  return (
    <div
      className="flex justify-center items-center
         absolute ml-20 bottom-0 left-0 z-90"
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
