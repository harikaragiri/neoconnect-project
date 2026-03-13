# NeoConnect Project

## Overview
NeoConnect is a smart complaint management system for organizations. It allows users to **submit complaints**, **track them using a tracking ID**, and lets the admin view all complaints in a **Dashboard** and update their status.  

The system is designed to streamline complaint handling, reduce delays, and improve organizational accountability.

---

## Project Objective
- Enable users to submit complaints in a structured format.  
- Generate a **unique tracking ID** for every complaint.  
- Allow users to track the status of their complaint.  
- Provide an admin dashboard to monitor, manage, and update complaints.  
- Store all complaints securely in a database for future reference and analysis.

---

## Technology Stack

| Layer         | Technology/Tool                       |
|---------------|--------------------------------------|
| Frontend      | Next.js, React, Tailwind CSS          |
| Backend       | Node.js, Express.js                   |
| Database      | MongoDB Atlas                         |
| Hosting       | Frontend → Vercel, Backend → Render  |

---

## Folder Structure


neoconnect-project/
├─ frontend/ ← Next.js frontend code
├─ backend/ ← Express backend code
├─ README.md ← Project information
└─ NeoConnect_Presentation.pptx ← Project presentation (separate file)


---

## Implementation / How it Works

### 1. Submit Complaint
- Users fill a form with category, department, location, severity, and description.  
- A **unique tracking ID** is generated using the timestamp.  
- Data is sent to the **backend API** and stored in MongoDB.  

**Backend snippet:**
```js
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
2. Track Complaint

Users search using the tracking ID.

Backend queries MongoDB for the complaint record and returns details including status.

Frontend snippet:

const res = await fetch(`${API_URL}/api/complaints/track/${trackingId}`);
const data = await res.json();
setResult(data);
3. Admin Dashboard

Admin can view all complaints in a table.

Can update status (New, In Progress, Resolved) for each complaint.

Changes are saved in MongoDB and reflected in the frontend.

Update status snippet:

await fetch(`${API_URL}/api/complaints/update/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ status }),
});
4. Database Design

Collection: complaints

Fields:

trackingId: String (unique)

category: String

department: String

location: String

severity: String

description: String

status: String (default = "New")

createdAt: Date

How to Run Locally
Backend
cd backend
npm install
# set .env with MONGO_URI and PORT
npm start
Frontend
cd frontend
npm install
npm run dev

Make sure your frontend uses the live backend URL:

const API_URL = "https://neoconnect-backend-dlnr.onrender.com";
Features
User

Submit complaints

Get a unique tracking ID

Track complaint status

Admin

View all complaints in a Dashboard

Update complaint status (New, In Progress, Resolved)

Real-time status updates

Live Demo

Frontend (Vercel): https://neoconnect-project.vercel.app

Backend API (Render): https://neoconnect-backend-dlnr.onrender.com