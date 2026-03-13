# NeoConnect Project

## Overview
NeoConnect is a smart complaint management system for organizations. Users can **submit complaints**, **track them using a tracking ID**, and admins can view all complaints in a **Dashboard** and update their status.  

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
└─ NeoConnect_Presentation.pptx ← Project presentation


---

## Implementation / How it Works

### 1. Submit Complaint
- Users fill out a form with category, department, location, severity, and description.  
- A **unique tracking ID** is generated for each complaint.  
- Data is sent to the backend and stored securely in MongoDB.

### 2. Track Complaint
- Users can search complaints using the tracking ID.  
- The backend returns complaint details and status.

### 3. Admin Dashboard
- Admins can view all complaints in a table.  
- Admins can update complaint status (**New, In Progress, Resolved**).  
- Changes are saved in the database and reflected in real-time for the user.

---

## Live Demo
- **Frontend (Vercel)**: [https://neoconnect-project.vercel.app](https://neoconnect-project.vercel.app)  
- **Backend API (Render)**: [https://neoconnect-backend-dlnr.onrender.com](https://neoconnect-backend-dlnr.onrender.com)  

---

## Features

### User
- Submit complaints  
- Receive a unique **tracking ID**  
- Track complaint status  

### Admin
- Dashboard to view all complaints  
- Update complaint status (**New, In Progress, Resolved**)  
- Real-time updates
