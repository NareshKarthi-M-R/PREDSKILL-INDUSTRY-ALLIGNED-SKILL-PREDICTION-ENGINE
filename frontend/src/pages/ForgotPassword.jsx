import React, { useState } from "react";
import { resetPassword } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    try {
      setLoading(true);
      await resetPassword(email);
      alert("Password reset email sent! Check your inbox.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">

      {/* 🌌 SAME Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-indigo-900 opacity-80" />

      {/* ✨ Floating Orbs (same as login) */}
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

      {/* 🔥 Card */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleReset}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] space-y-6"
      >
        <h2 className="text-3xl font-bold text-center tracking-widest">
          Reset Password
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-black/60 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-inner shadow-violet-500/20"
        />

        {/* 🔥 SAME Neon Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="relative w-full py-3 rounded-lg font-bold bg-violet-600 overflow-hidden"
        >
          {/* Light Sweep */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <span className="relative z-10">
            {loading ? "Sending..." : "Send Reset Link"}
          </span>
        </motion.button>

        {/* Back */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="button"
          onClick={() => navigate("/login")}
          className="w-full text-violet-300 hover:text-violet-200 transition"
        >
          Back to Login
        </motion.button>

      </motion.form>
    </div>
  );
};

export default ForgotPassword;