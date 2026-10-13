import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import TypingText from "./TypingText";
import Platforms from "./Platfroms";

const AIAgent = ({ userData, page }) => { // ✅ added page prop
  const [open, setOpen] = useState(false);
  const speechRef = useRef(null);

  // ✅ Page-based Messages (NEW)
  const pageMessages = {
    home: "Hello! I am Preddy, your personal career mentor. Enter your skills, and I’ll predict the best tech career path for you with confidence scores and a roadmap.",

    skill: "Please enter the skills you already know. Based on that, I will evaluate your profile and identify missing skills to guide your career path.",

    dashboard: "Great! Here is your career analysis. I have predicted your best roles, identified skill gaps, and created a roadmap. Follow it step by step to achieve your dream career.",

    platforms: (data) =>
    `You are exploring learning platforms for ${data?.skill || "this skill"}. Choose a platform that matches your learning style and start building your expertise step by step.`,
   platformDetail: (data) =>
    `You selected ${data?.platform}. This platform provides structured learning for ${data?.skill}. Focus on completing the course and mastering all the listed skills.`,

    evaluate: "choose the right answer for the skills you selected. Based on your choices, I will evaluate your profile and identify missing skills to guide your career path.",

    default: "Hi! I’m Preddy. I’ll guide you through your career journey step by step."
  };

 const getMessage = () => {
  const normalizedPage = page?.toLowerCase().trim();

  const message = pageMessages[normalizedPage];

  if (typeof message === "function") {
    return message(userData || {});
  }

  return message || pageMessages.default;
};

  // SPEECH FUNCTION
  const speakMessage = (text) => {
    if ("speechSynthesis" in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1;
      speech.pitch = 1.1;
      speech.volume = 1;

      speech.onend = () => {
        setOpen(false);
      };

      speechRef.current = speech;
      window.speechSynthesis.speak(speech);
    }
  };

  // Handle click
  const handleClick = () => {
  if (!open) {
    const latestMessage = getMessage();
    setOpen(true);
    speakMessage(latestMessage);
  }
};

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        className="fixed bottom-6 right-6 bg-violet-600 p-4 rounded-full shadow-xl cursor-pointer z-50"
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
      >
        <FaRobot size={28} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 bg-black bg-opacity-90 p-4 rounded-2xl shadow-2xl z-50"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
          >
            <h3 className="text-violet-400 font-semibold mb-2">Preddy AI</h3>

            <TypingText
              text={getMessage()}
              speed={40}
              onComplete={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAgent;