import React, { useState } from "react";
import SkillInputForm from "../components/SkillInputForm";
import { predictSkills } from "../ai/skillPredictor";

const Dashboard = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    const response = await predictSkills(formData);
    setResult(response);
  };

  return (
    <div>
      <SkillInputForm onSubmit={handleSubmit} />

      {result && (
        <div className="text-white p-6">
          <h3 className="text-xl font-bold">Prediction Result</h3>
          <p><b>Score:</b> {result.predicted_score}</p>
          <p><b>Next Skills:</b> {result.next_skills.join(", ")}</p>
          <p><b>Skill Gap:</b> {result.skill_gap.join(", ")}</p>
          <p><b>Learning Path:</b> {result.learning_path.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;