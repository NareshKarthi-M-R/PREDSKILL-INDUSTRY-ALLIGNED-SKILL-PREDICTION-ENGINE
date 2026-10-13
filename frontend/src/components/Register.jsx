import React, { useState } from "react";
import { registerWithEmail } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Register = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 NEW: flip state
  const [isFlipping, setIsFlipping] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password)
      return toast("Please fill all fields");

    try {
      setLoading(true);
      await registerWithEmail(email, password, username);
      toast.success("Register Successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Flip then navigate
  const goToLogin = () => {
    setIsFlipping(true);
    setTimeout(() => navigate("/login"), 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white perspective-[1200px]">

      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-indigo-900 opacity-80" />

      {/* ✨ Floating Orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 200, -200, 0], y: [0, -150, 150, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -200, 200, 0], y: [0, 150, -150, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* 🔥 Register Card with Flip */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateY: isFlipping ? -90 : 0,
        }}
        transition={{ duration: 0.6 }}
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] space-y-6"
      >
        <h2 className="text-3xl font-bold text-center tracking-widest text-white">
          Register
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 bg-black/60 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-inner shadow-violet-500/20"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-black/60 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-inner shadow-violet-500/20"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-black/60 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-inner shadow-violet-500/20"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-violet-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* 🔥 Neon Register Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full py-3 cursor-pointer rounded-lg font-bold bg-violet-600 overflow-hidden"
          disabled={loading}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="relative z-10">
            {loading ? "Creating..." : "Register"}
          </span>
        </motion.button>

        {/* 🔁 Flip to Login */}
        <div className="text-center text-sm text-violet-300">
          Already have an account?{" "}
          <button
            type="button"
            onClick={goToLogin}
            className="underline hover:text-white cursor-pointer"
          >
            Login
          </button>
        </div>

      </motion.form>
    </div>
  );
};

export default Register;