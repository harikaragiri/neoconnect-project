import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import complaintRoutes from "./routes/compliantRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();   // IMPORTANT

app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
  res.send("NeoConnect API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});