"use client";
import { useState } from "react";

export default function TrackComplaint() {

  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<any>(null);

  // ✅ Use your live Render backend
  const API_URL = "https://neoconnect-backend-dlnr.onrender.com";

  const searchComplaint = async () => {
    if (!trackingId) return alert("Please enter a Tracking ID");

    try {
      const response = await fetch(`${API_URL}/api/complaints/track/${trackingId}`);
      if (!response.ok) {
        alert("Complaint not found!");
        setResult(null);
        return;
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Error fetching complaint:", err);
      alert("Failed to fetch complaint. Please try again.");
    }
  };

  const statusColor = (status: string) => {
    if (status === "Resolved") return "bg-green-500";
    if (status === "In Progress") return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-10">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-[500px] text-white">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Track Complaint
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="flex-1 p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />

          <button
            onClick={searchComplaint}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded text-white"
          >
            Search
          </button>
        </div>

        {result && (
          <div className="bg-slate-700 p-5 rounded-lg space-y-2">
            <p><b>Tracking ID:</b> {result.trackingId}</p>
            <p>
              <b>Status:</b>{" "}
              <span
                className={`px-2 py-1 rounded text-sm text-white ${statusColor(result.status)}`}
              >
                {result.status}
              </span>
            </p>
            <p><b>Department:</b> {result.department}</p>
            <p><b>Location:</b> {result.location}</p>
            <p><b>Description:</b> {result.description}</p>
          </div>
        )}

      </div>
    </div>
  );
}