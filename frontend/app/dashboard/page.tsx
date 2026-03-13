"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  // Replace with your Render backend URL
  const API_URL = "https://neoconnect-backend-dlnr.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/api/complaints/all`)
      .then((res) => res.json())
      .then((data) => setComplaints(data))
      .catch((err) => console.error("Error fetching complaints:", err));
  }, []);

  const severityColor = (severity: string) => {
    if (severity === "High") return "bg-red-500";
    if (severity === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`${API_URL}/api/complaints/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      // Update state locally after change
      setComplaints((prev: any) =>
        prev.map((c: any) =>
          c._id === id ? { ...c, status: status } : c
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Complaint Dashboard</h1>

      <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-700 text-gray-200">
            <tr>
              <th className="p-3 text-left">Tracking ID</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Severity</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c: any) => (
              <tr
                key={c._id}
                className="border-b border-slate-700 hover:bg-slate-700 transition"
              >
                <td className="p-3">{c.trackingId}</td>
                <td className="p-3">{c.category}</td>
                <td className="p-3">{c.department}</td>
                <td className="p-3">{c.location}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full text-white ${severityColor(
                      c.severity
                    )}`}
                  >
                    {c.severity}
                  </span>
                </td>

                <td className="p-3">
                  <select
                    value={c.status}
                    onChange={(e) => updateStatus(c._id, e.target.value)}
                    className="bg-slate-700 text-white p-2 rounded border border-slate-600 focus:outline-none"
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}