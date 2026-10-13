import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { IoMdArrowBack } from "react-icons/io";
import { MdDomain } from "react-icons/md";
import ModelViewer from "../components/ModelViewer";
import TypingText from "../components/TypingText";
import AIAgent from "./AIAgent";

/* ✅ CLICKABLE ROADBLOCK */
const RoadBlock = ({ title, level, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
  const skillName =
    typeof title === "string"
      ? title
      : title?.skill || title?.name || "unknown";

  navigate(`/platforms/${skillName.toLowerCase()}`);
};

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: level * 0.3, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 10px 20px rgba(139,92,246,0.5)",
      }}
      className="bg-gradient-to-r from-violet-800 to-purple-600 p-6 rounded-2xl shadow-2xl text-center w-64 hover:cursor-pointer transition-all duration-300"
    >
      <h3 className="text-lg font-bold">
        {typeof title === "string"
          ? title
          : title?.skill || title?.name || "Unknown Skill"}
      </h3>
    </motion.div>
  );
};

const Dashboard3D = ({ data, goBack }) => {
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl font-semibold">
        No prediction data
      </div>
    );
  }

  const score =
    data?.confidence || data?.top_careers?.[0]?.confidence || 0;

  const isLowConfidence = score < 30;

  const allMissingSkills = Array.from(
    new Set([
      ...(data?.missing_skills || []),
      ...(data?.failed_skills || []),
    ])
  );

  const isReady = allMissingSkills.length === 0;

  const histogramData =
    data?.roadmap?.map((skill, index) => ({
      name:
        typeof skill === "string"
          ? skill
          : skill?.skill || skill?.name || "Unknown",
      months: index + 2,
    })) || [];

  const lineData = histogramData.map((item, index) => ({
    ...item,
    progress: (index + 1) * 10,
  }));

  const pieData = [
    { name: "Known Skills", value: score },
    { name: "Missing Skills", value: 100 - score },
  ];

  const totalSkills = data?.skills?.length || 1;
  const failedCount = allMissingSkills.length;

  const evalScore = Math.max(
    0,
    Math.round(((totalSkills - failedCount) / totalSkills) * 100)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950 to-black text-white flex flex-col items-center p-6">
      <AIAgent page="dashboard" />
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-violet-400 tracking-wide"
      >
        AI Career Growth Tower
      </motion.h1>

      {/* AI AGENT */}
      <div className="fixed top-24 right-5 w-60 bg-opacity-80 p-5 rounded-2xl shadow-2xl backdrop-blur-md z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-28">
            <ModelViewer modelPath="robo.glb" />
          </div>

          <h3 className="text-xl font-semibold text-violet-300">
            Preddy Says:
          </h3>

          <TypingText
            text={
              isReady
                ? `Excellent! You are fully job-ready for ${data?.predicted_role || "your role"}. Start applying now 🚀`
                : isLowConfidence
                ? `You're on the right track! Keep following your roadmap and improving weak skills.`
                : `Your predicted career is ${data?.predicted_role || "Unknown"}.
Your AI confidence score is ${score}%.
Complete missing skills to become job-ready.`
            }
            speed={40}
          />
        </div>
      </div>

      {/* DOMAIN */}
      <h2 className="text-xl flex items-center gap-2 mb-6 text-gray-300">
        <MdDomain /> Domain:
        <span className="text-violet-300 font-semibold">
          {data?.final_domain ||
            data?.predicted_domain ||
            "Not Available"}
        </span>
      </h2>

      {/* CONFIDENCE */}
      <div className="w-40 mb-6">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#c084fc",
            pathColor: "#8b5cf6",
            trailColor: "#1f2937",
            textSize: "16px",
          })}
        />
      </div>

      {/* EVALUATION SCORE */}
      <div className="w-full max-w-md mb-8">
        <h3 className="text-center text-violet-300 mb-2 font-semibold">
          Skill Evaluation Score
        </h3>

        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-violet-500 transition-all duration-500"
            style={{ width: `${evalScore}%` }}
          />
        </div>

        <p className="text-center mt-2 text-gray-300">
          {evalScore}% Skills Matched
        </p>
      </div>

      {/* READY MESSAGE */}
      {isReady && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-green-600 text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl text-lg font-semibold"
        >
          You are READY to apply for this job!
        </motion.div>
      )}

      {/* MISSING SKILLS */}
      {!isReady && (
        <motion.div className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl mb-10 shadow-lg">
          <h3 className="text-lg font-semibold text-violet-300 mb-3">
            Missing Skills
          </h3>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {allMissingSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-3">
                <span>{typeof skill === "string" ? skill : "Unknown Skill"}</span>
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-500">
                  Learn
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* CHARTS */}
      {!isReady && (
        <>
          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-4xl mb-12 shadow-lg">
            <h3 className="text-xl text-center mb-6 text-violet-300">
              Skill Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={histogramData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="months" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-4xl mb-12 shadow-lg">
            <h3 className="text-xl text-center mb-6 text-violet-300">
              Learning Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#8b5cf6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-2xl mb-12 shadow-lg">
            <h3 className="text-xl text-center mb-6 text-violet-300">
              Skill Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={index === 0 ? "#4ade80" : "#f87171"} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* ROADMAP */}
      <div className="flex flex-col items-center space-y-10 mt-6">
        {Array.isArray(data?.roadmap) &&
          data.roadmap.map((step, index) => (
            <React.Fragment key={index}>
              <RoadBlock
                title={step?.skill || step}
                url={step?.url}
                level={index}
              />
              {index !== data.roadmap.length - 1 && (
                <div className="w-1 h-10 bg-violet-500 opacity-60 rounded-full"></div>
              )}
            </React.Fragment>
          ))}
      </div>

      {/* BACK BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
        onClick={goBack}
        className="mt-12 flex items-center gap-2 bg-violet-600 px-8 py-3 rounded-xl font-semibold shadow-lg"
      >
        <IoMdArrowBack /> Go Back
      </motion.button>
    </div>
  );
};

export default Dashboard3D;