import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    required: true,
    unique: true
  },
  category: String,
  department: String,
  location: String,
  severity: String,
  description: String,
  status: {
    type: String,
    default: "New"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;