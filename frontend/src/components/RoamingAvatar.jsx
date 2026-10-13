import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";

const RoamingAvatar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const maxX = window.innerWidth - 220;
      const maxY = window.innerHeight - 220;

      const randomX = Math.random() * maxX - maxX / 2;
      const randomY = Math.random() * maxY - maxY / 2;

      setPosition({ x: randomX, y: randomY });
    };

    moveRandomly();
    const interval = setInterval(moveRandomly, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute w-[270px] h-[270px] z-10"  // ✅ reduced size
      animate={position}
      transition={{ duration: 4, ease: "easeInOut" }}
    >
      <ModelViewer modelPath="robo.glb" />
    </motion.div>
  );
};

export default RoamingAvatar;