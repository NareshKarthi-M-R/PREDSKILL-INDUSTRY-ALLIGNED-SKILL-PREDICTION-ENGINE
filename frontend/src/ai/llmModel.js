export function generateLearningPlan(userSkills, gapSkills) {
  if (!gapSkills || gapSkills.length === 0) {
    return "Great! Your skills match current market needs. Focus on advanced projects and real-world experience.";
  }

  let plan = "Based on market trends, you should learn:\n\n";

  gapSkills.forEach((skill, index) => {
    plan += `${index + 1}. ${skill} – start with basics, then build a mini project.\n`;
  });

  plan += "\nSuggested path:\n";
  plan += "• Learn fundamentals\n";
  plan += "• Practice with projects\n";
  plan += "• Apply to internships/jobs\n";

  return plan;
}