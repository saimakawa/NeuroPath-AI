import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  skillName: String,
  lastUsed: Date,
  practiceGap: Number,
  rating: Number,
  decayPercent: Number,
  status: String,
});

export default mongoose.model("Skill", skillSchema);
