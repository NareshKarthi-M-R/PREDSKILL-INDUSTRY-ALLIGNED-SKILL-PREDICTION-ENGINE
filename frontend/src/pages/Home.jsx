import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ModelViewer from "../components/ModelViewer";
import TypingText from "../components/TypingText";
import RoamingAvatar from "../components/RoamingAvatar";
import AIAgent from "../components/AIAgent";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion"; // ✅ added

const Home = ({ startHandler, user, onLogout }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      toast("Please login first to get started!");
      navigate("/login");
      return;
    }
    navigate("/form"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 via-black to-violet-800 text-white font-sans flex flex-col relative overflow-hidden">
    <AIAgent page="home"/>
      {/* 🌌 Background Glow (ADDED) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-violet-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex sticky top-0 justify-between z-50 items-center p-6 bg-black bg-opacity-50 backdrop-blur-md flex-wrap gap-4"
      >
        <h1 className="text-3xl font-bold">PredSkill</h1>
        <div className="flex gap-4 items-center flex-wrap">
          <Link to="/about" className="hover:text-violet-400 transition font-semibold hover:underline underline-offset-12">About</Link>
          <Link to="/careers" className="hover:text-violet-400 transition font-semibold hover:underline underline-offset-12">Preddy News</Link>

          {!user ? (
            <>
              <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition duration-200 bg-violet-700 font-semibold">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition duration-200 bg-violet-700 font-semibold">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/trends" className="px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition duration-200 bg-violet-700 font-semibold">
                Trends
              </Link>
              <div className="flex items-center gap-3 bg-violet-700 px-4 py-2 rounded-lg font-semibold">
                <img
                  src={user.photoURL || "favicon.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{user.displayName || user.email}</span>
              </div>
              <button
                onClick={onLogout}
                className="px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 cursor-pointer transition duration-500 bg-red-600 font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 py-32 px-6 relative">

        {/* 🔥 Animated Heading (ADDED) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r bg-violet-500 bg-clip-text text-transparent"
        >
          Predict, Learn & Get Job-Ready
        </motion.h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl">
          <TypingText
            text="Hey there! I’m Preddy, your AI skill guide. I help you identify skill gaps, create a personalized learning roadmap, and get job-ready"
            speed={80}
          />
        </p>

        {/* 🚀 Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="relative overflow-hidden  cursor-pointer bg-violet-700 px-8 py-4 rounded-xl text-xl font-bold shadow-lg group"
        >
          <span className="relative z-10">Get Started</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-700  opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>
        </motion.button>

        {/* 3D Avatar */}
        <RoamingAvatar />
      </section>

      {/* How It Works */}
      <motion.section
        id="how-it-works"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-black bg-opacity-40"
      >
        <h2 className="text-4xl font-bold mb-20 text-center underline decoration-2 underline-offset-6">
          How PredSkill Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {["Analyze Skills", "Predict Gaps", "Personalized Roadmap"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-violet-800 bg-opacity-70 p-6 rounded-xl shadow-lg border border-violet-500 hover:shadow-violet-500/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p>AI-powered insights to guide your career growth.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-10 text-center underline decoration-2 underline-offset-6">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {["NLP Job Trend Analysis", "Skill Forecast Engine", "Interactive Dashboard"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-black bg-opacity-50 rounded-xl shadow-lg border border-violet-600"
            >
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p>Advanced AI-driven features to boost your career.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-70 py-6 mt-20 text-center space-y-3 border-t border-violet-800">
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#!" className="hover:text-violet-400 transition hover:underline">About</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Features</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Contact</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Blog</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Careers</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">FAQ</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Privacy Policy</a>
          <a href="#!" className="hover:text-violet-400 transition hover:underline">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;