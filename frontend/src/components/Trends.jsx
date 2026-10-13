import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { IoMdArrowBack } from "react-icons/io";

// ✨ Animated Glow Dot (Blink + Pulse)
const GlowDot = ({ cx, cy, stroke }) => {
  return (
    <g>
      <circle cx={cx} cy={cy} r={10} fill={stroke} opacity={0.2}>
        <animate
          attributeName="r"
          values="8;14;8"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0.6;0.2"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx={cx} cy={cy} r={6} fill={stroke} opacity={0.4}>
        <animate
          attributeName="r"
          values="5;9;5"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx={cx} cy={cy} r={4} fill={stroke}>
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
};

// 📈 UPDATED Trending Skills Data (ADDED MORE)
const trendData = [
  {
    month: "Jan",
    AI: 40,
    DataScience: 35,
    WebDev: 30,
    Cloud: 20,
    CyberSecurity: 25,
    DevOps: 22,
  },
  {
    month: "Feb",
    AI: 50,
    DataScience: 38,
    WebDev: 28,
    Cloud: 25,
    CyberSecurity: 28,
    DevOps: 26,
  },
  {
    month: "Mar",
    AI: 65,
    DataScience: 40,
    WebDev: 25,
    Cloud: 30,
    CyberSecurity: 32,
    DevOps: 30,
  },
  {
    month: "Apr",
    AI: 80,
    DataScience: 42,
    WebDev: 20,
    Cloud: 35,
    CyberSecurity: 36,
    DevOps: 34,
  },
  {
    month: "May",
    AI: 90,
    DataScience: 45,
    WebDev: 18,
    Cloud: 40,
    CyberSecurity: 40,
    DevOps: 38,
  },
];

// 📊 UPDATED Company Demand Data (MORE MNCs ADDED)
const companyData = [
  {
    name: "Google",
    AI: 90,
    DataScience: 70,
    WebDev: 60,
    Cloud: 95,
    CyberSecurity: 80,
  },
  {
    name: "Amazon",
    AI: 85,
    DataScience: 75,
    WebDev: 65,
    Cloud: 98,
    CyberSecurity: 78,
  },
  {
    name: "Microsoft",
    AI: 88,
    DataScience: 72,
    WebDev: 68,
    Cloud: 96,
    CyberSecurity: 82,
  },
  {
    name: "Meta",
    AI: 87,
    DataScience: 70,
    WebDev: 72,
    Cloud: 85,
    CyberSecurity: 75,
  },
  {
    name: "Apple",
    AI: 80,
    DataScience: 68,
    WebDev: 65,
    Cloud: 78,
    CyberSecurity: 85,
  },
  {
    name: "Netflix",
    AI: 82,
    DataScience: 74,
    WebDev: 66,
    Cloud: 88,
    CyberSecurity: 70,
  },
  {
    name: "TCS",
    AI: 60,
    DataScience: 65,
    WebDev: 70,
    Cloud: 72,
    CyberSecurity: 68,
  },
  {
    name: "Infosys",
    AI: 65,
    DataScience: 68,
    WebDev: 72,
    Cloud: 75,
    CyberSecurity: 70,
  },
];

const Trends = ({ goBack }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950 to-black text-white flex flex-col items-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-violet-400 mb-8"
      >
        Market Trends & Insights
      </motion.h1>

      {/* 📈 Trending Skills */}
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-5xl mb-12 shadow-lg">
        <h2 className="text-xl text-center mb-6 text-violet-300">
          Trending Skills Over Time
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />

            {/* ORIGINAL */}
            <Line
              type="monotone"
              dataKey="AI"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={<GlowDot stroke="#8b5cf6" />}
            />
            <Line
              type="monotone"
              dataKey="DataScience"
              stroke="#22c55e"
              strokeWidth={3}
              dot={<GlowDot stroke="#22c55e" />}
            />
            <Line
              type="monotone"
              dataKey="WebDev"
              stroke="#f87171"
              strokeWidth={3}
              dot={<GlowDot stroke="#f87171" />}
            />

            {/* ✅ NEW ADDED LINES */}
            <Line
              type="monotone"
              dataKey="Cloud"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={<GlowDot stroke="#0ea5e9" />}
            />
            <Line
              type="monotone"
              dataKey="CyberSecurity"
              stroke="#facc15"
              strokeWidth={3}
              dot={<GlowDot stroke="#facc15" />}
            />
            <Line
              type="monotone"
              dataKey="DevOps"
              stroke="#a855f7"
              strokeWidth={3}
              dot={<GlowDot stroke="#a855f7" />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 Company Demand */}
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-5xl mb-12 shadow-lg">
        <h2 className="text-xl text-center mb-6 text-violet-300">
          Company Demand vs Technology
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={companyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />

            {/* ORIGINAL */}
            <Bar dataKey="AI" fill="#8b5cf6" />
            <Bar dataKey="DataScience" fill="#22c55e" />
            <Bar dataKey="WebDev" fill="#f87171" />

            {/* ✅ NEW ADDED */}
            <Bar dataKey="Cloud" fill="#0ea5e9" />
            <Bar dataKey="CyberSecurity" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="max-w-3xl text-center text-gray-300 mb-10">
        <p>
          AI, Cloud, and Cybersecurity are rapidly growing. Data Science remains
          stable, while Web Development demand is slightly decreasing. Modern
          companies are heavily investing in Cloud and Security domains.
        </p>
      </div>

      {/* Back */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-violet-600 px-8 py-3 rounded-xl font-semibold shadow-lg"
      >
        <IoMdArrowBack /> Go Back
      </motion.button>
    </div>
  );
};

export default Trends;
  