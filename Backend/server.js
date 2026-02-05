import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import ideaRoutes from "./routes/ideaRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/ideas", ideaRoutes);
app.get("/", (req, res) => {
  res.send("Srver run");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
  })
  .catch((err) => console.log(err));
app.use(errorHandler);
