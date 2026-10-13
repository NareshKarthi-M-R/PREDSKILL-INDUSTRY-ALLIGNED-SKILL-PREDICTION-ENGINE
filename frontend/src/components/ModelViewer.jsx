import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath, roam }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame((state) => {
    if (roam && modelRef.current) {
      const t = state.clock.getElapsedTime();

      modelRef.current.position.x = Math.sin(t * 0.5) * 1;
      modelRef.current.position.y = -1.5 + Math.cos(t * 0.8) * 0.5;

      // ❌ removed spinning (no change to structure)
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.1}                // ✅ reduced size
      position={[0, -1, 0]}    // ✅ adjusted height
      rotation={[0, -Math.PI / 2, 0]} // ✅ front facing fix
    />
  );
};

const ModelViewer = ({ modelPath, mode = "static" }) => {
  const isRoaming = mode === "roam";

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 1, 7], fov: 45 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 5, 2]} intensity={1.5} />

      <Model modelPath={modelPath} roam={isRoaming} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default ModelViewer;