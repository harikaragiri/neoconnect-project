"use client";
import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    category: "",
    department: "",
    location: "",
    severity: "",
    description: ""
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/complaints/submit",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    });

    const data = await res.json();
    alert("Complaint submitted! Tracking ID: " + data.trackingId);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-10">

      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-[450px] text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Submit Complaint
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white focus:outline-none"
            onChange={(e)=>setFormData({...formData,category:e.target.value})}
          >
            <option value="">Select Category</option>
            <option>Safety</option>
            <option>Maintenance</option>
            <option>IT</option>
          </select>

          <input
            type="text"
            placeholder="Department"
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            onChange={(e)=>setFormData({...formData,department:e.target.value})}
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            onChange={(e)=>setFormData({...formData,location:e.target.value})}
          />

          <select
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white focus:outline-none"
            onChange={(e)=>setFormData({...formData,severity:e.target.value})}
          >
            <option value="">Select Severity</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            placeholder="Description"
            rows={4}
            className="w-full bg-slate-700 border border-slate-600 p-3 rounded text-white placeholder-gray-400 focus:outline-none"
            onChange={(e)=>setFormData({...formData,description:e.target.value})}
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            Submit Complaint
          </button>

        </form>

      </div>

    </div>
  );
}