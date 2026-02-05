import Idea from "../models/Idea.js";

// ADD IDEA
export const addIdea = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newIdea = new Idea({
      title,
      description,
    });

    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET IDEAS
export const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
