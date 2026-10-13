import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

const Node = ({ position, label }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="violet" />
      </mesh>

      <Text
        position={[0, 0.6, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const Roadmap3D = ({ steps }) => {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{
          position: [0, 1.5, 6],
          fov: 45,             
          near: 0.1,
          far: 1000,
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Controls */}
        <OrbitControls enableZoom enablePan enableRotate />

        {/* Nodes */}
        {steps.map((step, i) => (
          <Node key={i} position={[i * 1.8, 0, 0]} label={step} />
        ))}
      </Canvas>
    </div>
  );
};

export default Roadmap3D;