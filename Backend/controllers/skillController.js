import Skill from "../models/Skill.js";

export const addSkill = async (req, res) => {
  const { skillName, lastUsed, practiceGap, rating } = req.body;

  const days = (Date.now() - new Date(lastUsed)) / (1000 * 60 * 60 * 24);

  let decay = (days / practiceGap) * 100;
  decay = Math.min(decay, 100);

  const status =
    decay <= 30 ? "Healthy" : decay <= 70 ? "Decaying" : "Critical";

  const skill = await Skill.create({
    userId: req.user.id,
    skillName,
    lastUsed,
    practiceGap,
    rating,
    decayPercent: decay,
    status,
  });

  res.json(skill);
};

export const getSkills = async (req, res) => {
  const skills = await Skill.find({ userId: req.user.id });
  res.json(skills);
};
