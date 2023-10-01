"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MeshComponent() {
  const fileUrl = "/duck_mail/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y = 5;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.z += 0.01;
    mesh.current.position.y = -100;
    mesh.current.position.x = 230;
    mesh.current.position.z = -100;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function DuckMailGirl() {
  return (
    <div
      className="flex justify-center 
    items-center absolute ml-20 bottom-0 left-0"
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
