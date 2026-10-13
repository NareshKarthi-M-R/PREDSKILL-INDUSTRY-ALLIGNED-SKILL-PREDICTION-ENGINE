import React, { useState, useEffect } from "react";
import Trends from "./components/Trends";
import Careers from "./components/Careers";
import Home from "./pages/Home";
import SkillInputForm from "./components/SkillInputForm";
import Dashboard3D from "./components/Dashboard3D";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AIAgent from "./components/AIAgent";
import About from "./components/About";
import Platforms from "./components/Platfroms";
import PlatformDetail from "./components/PlatformDetail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

import toast, { Toaster } from "react-hot-toast";

/* 🔥 LOADER COMPONENT (FIXED) */
const AdvancedLoader = ({ loading }) => {
  const steps = [
    "Scanning your skills...",
    "Analyzing domain match...",
    "Detecting missing skills...",
    "Predicting best career path...",
    "Generating AI insights...",
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 40);
    return () => clearInterval(prog);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Scanner UI */}
      <div className="relative flex items-center justify-center">

        <motion.div
          className="absolute w-56 h-56 rounded-full border border-violet-500"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <motion.div
          className="absolute w-44 h-44 rounded-full border-2 border-dashed border-violet-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        <motion.div
          className="absolute w-40 h-1 bg-violet-400"
          animate={{ y: [-80, 80, -80] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-violet-300 rounded-full"
          animate={{
            rotate: 360,
            x: [0, 70, 0, -70, 0],
            y: [70, 0, -70, 0, 70],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <motion.div
          className="w-20 h-20 rounded-full bg-violet-500 shadow-[0_0_60px_violet]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      {/* Dynamic Text */}
      <motion.p
        key={stepIndex}
        className="text-xl font-semibold mt-20 text-violet-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {steps[stepIndex]}
      </motion.p>

      <p className="text-sm text-gray-400 mt-2">
        {progress}% completed
      </p>

      <motion.p
        className="text-xs text-gray-500 mt-4"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Matching skills • Mapping future • AI in progress
      </motion.p>
    </motion.div>
  );
};

/* 🔥 MAIN APP */
const AppContent = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAuthLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleFormSubmit = (data) => {
    fetchPrediction(data);
  };

  const fetchPrediction = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const result = await response.json();

      const mergedMissingSkills = Array.from(
        new Set([
          ...(result?.missing_skills || []),
          ...(data?.evaluation_missing || []),
        ])
      );

      const finalData = {
        ...result,
        missing_skills: mergedMissingSkills,
        failed_skills: mergedMissingSkills,
        is_ready: mergedMissingSkills.length === 0 && result?.is_ready,
      };

      setPredictionData(finalData);

      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 6000); // 6 seconds
    } catch (error) {
      console.error(error);
      alert("Backend error. Check Flask console.");
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setPredictionData(null);
    navigate("/form");
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    toast.success("Logged out successfully!", { duration: 3000 });
  };

  if (authLoading) {
    return (
      <div className="text-white flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 via-black to-violet-800 text-white flex flex-col">

      <Toaster position="top-center" />

      <AIAgent userData={predictionData} />

      <Routes>
        <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/about" element={<About />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/form" element={<SkillInputForm onSubmit={handleFormSubmit} />} />
        <Route path="/dashboard" element={<Dashboard3D data={predictionData} goBack={handleGoBack} />} />
        <Route path="/login" element={<Login onLoginSuccess={(u) => { setUser(u); navigate("/"); }} />} />
        <Route path="/register" element={<Register onLoginSuccess={(u) => { setUser(u); navigate("/"); }} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/platforms/:skill" element={<Platforms />} />
        <Route path="/platforms/:skill/:platform" element={<PlatformDetail />} />
      </Routes>

      {/* ✅ CLEAN LOADER CALL */}
      <AnimatePresence>
        <AdvancedLoader loading={loading} />
      </AnimatePresence>

    </div>
  );
};

/* ROOT */
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;