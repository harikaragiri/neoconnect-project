import express from "express";
import Complaint from "../models/complaints.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { category, department, location, severity, description } = req.body;

    const trackingId = "NEO-" + Date.now();

    const complaint = new Complaint({
      trackingId,
      category,
      department,
      location,
      severity,
      description
    });

    await complaint.save();

    res.json({
      message: "Complaint submitted",
      trackingId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/track/:trackingId", async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
      trackingId: req.params.trackingId
    });

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(complaint);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;