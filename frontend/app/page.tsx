"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    category: "",
    department: "",
    location: "",
    severity: "",
    description: ""
  });

  // ✅ Use your Render backend URL
  const API_URL = "https://neoconnect-backend-dlnr.onrender.com";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/complaints/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.trackingId) {
        alert("Complaint submitted! Tracking ID: " + data.trackingId);
        // Reset form
        setFormData({
          category: "",
          department: "",
          location: "",
          severity: "",
          description: ""
        });
      } else {
        alert("Failed to submit complaint. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting complaint:", err);
      alert("Failed to submit complaint. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-10">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-[450px] text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Submit Complaint</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white focus:outline-none"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option>Safety</option>
            <option>Maintenance</option>
            <option>IT</option>
          </select>

          <input
            type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            required
          />

          <select
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white focus:outline-none"
            value={formData.severity}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
            required
          >
            <option value="">Select Severity</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            placeholder="Description"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            Submit Complaint
          </button>

        </form>

        {/* Track Complaint Button */}
        <div className="text-center mt-6">
          <Link href="/track">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold transition">
              Track Complaint
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}