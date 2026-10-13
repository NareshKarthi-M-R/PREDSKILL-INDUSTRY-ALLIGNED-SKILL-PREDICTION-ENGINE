import React, { useState } from "react";
import { loginWithEmail, loginWithGoogle } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 NEW: flip state
  const [isFlipping, setIsFlipping] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast("Please fill all fields");

    try {
      setEmailLoading(true);
      const userCredential = await loginWithEmail(email, password);
      toast.success("Login Successful");
      onLoginSuccess(userCredential.user);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setEmailLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      const result = await loginWithGoogle();
      toast.success("Google Access Granted");
      onLoginSuccess(result.user);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  // 🔥 Flip then navigate
  const goToRegister = () => {
    setIsFlipping(true);
    setTimeout(() => navigate("/register"), 600);
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

      {/* 🔥 Login Card with Flip */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateY: isFlipping ? 90 : 0,
        }}
        transition={{ duration: 0.6 }}
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] space-y-6"
      >
        <h2 className="text-3xl font-bold text-center tracking-widest text-white">
          Login
        </h2>

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

        {/* 🔥 Neon Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full py-3 cursor-pointer rounded-lg font-bold bg-violet-600 overflow-hidden"
          disabled={emailLoading}
        >
          <motion.span
            className="absolute inset-0 cursor-pointer bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="relative z-10 cursor-pointer">
            {emailLoading ? "Authenticating..." : "Login"}
          </span>
        </motion.button>

        {/* Links */}
        <div className="flex justify-between text-sm text-violet-300">
          <button type="button" className="cursor-pointer" onClick={goToRegister}>Sign Up</button>
          <a href="/forgot-password">Forgot Password</a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 border-b border-violet-500/30"></div>
          <span className="text-sm text-violet-400">OR</span>
          <div className="flex-1 border-b border-violet-500/30"></div>
        </div>

        {/* Google Button */}
        <motion.button
          type="button"
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white text-black rounded-lg font-semibold flex items-center justify-center gap-3 shadow-lg"
          disabled={googleLoading}
        >
          <img src="google.svg" alt="Google" className="w-5 h-5" />
          {googleLoading ? "Connecting..." : "Login with Google"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;