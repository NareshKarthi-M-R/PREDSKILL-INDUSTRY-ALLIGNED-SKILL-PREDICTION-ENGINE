import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaNewspaper,
  FaFire,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const trendingSkills = [
    "AI Engineering",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "DevOps",
    "Blockchain",
    "Full Stack Development",
    "Machine Learning",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950 to-black text-white px-6 py-12">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-violet-400 mb-10"
      >
        About PredSkill
      </motion.h1>

      {/* Intro */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-16">
        PredSkill is an AI-powered career intelligence platform that analyzes your skills,
        identifies gaps, predicts career paths, and provides a personalized roadmap
        to help you become job-ready faster.
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <FaRobot className="text-4xl text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Predictions</h3>
          <p className="text-gray-400">
            Uses ML models to predict your ideal career role.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <FaBrain className="text-4xl text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Skill Gap Analysis</h3>
          <p className="text-gray-400">
            Detects missing skills needed for industry roles.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <FaChartLine className="text-4xl text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth Roadmap</h3>
          <p className="text-gray-400">
            Gives step-by-step learning path.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <FaUsers className="text-4xl text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
          <p className="text-gray-400">
            Clean UI for better experience.
          </p>
        </div>

      </div>

      {/* PREDDY NEWS */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl text-violet-400 font-bold mb-6 text-center flex items-center justify-center gap-2">
          <FaNewspaper /> Preddy Updates
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-3">
            <FaLightbulb className="text-violet-400" />
            Preddy AI now supports real-time career prediction with improved accuracy.
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-3">
            <FaChartLine className="text-violet-400" />
            New dashboard added with 3D visualization of your skill analysis.
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-3">
            <FaRobot className="text-violet-400" />
            AI Agent introduced to guide users interactively.
          </div>
        </div>
      </div>

      {/* TRENDING SKILLS */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-3xl text-violet-400 font-bold mb-6 flex items-center justify-center gap-2">
          <FaFire /> Trending Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {trendingSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-violet-700 px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI ENGINE */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl mb-16">
        <h2 className="text-3xl text-violet-400 font-bold mb-4 text-center flex items-center justify-center gap-2">
          <FaCogs /> Preddy AI Engine
        </h2>

        <p className="text-gray-300 text-lg text-center">
          Preddy AI is built using Machine Learning techniques that analyze user skills,
          compare them with industry datasets, and predict the most suitable career path.
          It also calculates missing skills and generates intelligent recommendations.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl mb-16">
        <h2 className="text-3xl text-violet-400 font-bold mb-4 text-center flex items-center justify-center gap-2">
          <FaBrain /> How It Works
        </h2>

        <ul className="text-gray-300 space-y-3 text-lg">
          <li>✔ User enters skills and target domain</li>
          <li>✔ Data is processed by ML prediction model</li>
          <li>✔ System identifies missing skills</li>
          <li>✔ Generates readiness score</li>
          <li>✔ Provides roadmap for improvement</li>
        </ul>
      </div>

      {/* Vision */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl text-center mb-16">
        <h2 className="text-3xl font-bold text-violet-400 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-300 text-lg">
          We aim to bridge the gap between students and industry by providing
          AI-powered career guidance and real-time insights.
        </p>
      </div>

      {/* Back */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-violet-600 px-8 py-3 rounded-xl font-semibold"
        >
          <IoMdArrowBack /> Back to Home
        </button>
      </div>

    </div>
  );
};

export default About;