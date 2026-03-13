# NeoConnect – Complaint Management Chatbot

## Project Overview
NeoConnect is a full-stack complaint management system that allows users to easily submit and track complaints through a chatbot-style interface.  
The system helps organizations manage internal issues efficiently by allowing users to register complaints and receive a unique tracking ID.

Each complaint is stored in a database and can be tracked later using the generated tracking ID.

---

## Features
- Submit complaints through an interactive chatbot interface
- Automatic generation of a unique complaint tracking ID
- Store complaint details in a database
- Simple and user-friendly interface
- Organized complaint records for easy management

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Deployment
- Vercel

### Version Control
- GitHub

---

## System Architecture

User → Chatbot Interface → Backend API → Database

1. User opens the web application.
2. User submits a complaint through the chatbot form.
3. Backend server processes the request.
4. Complaint details are stored in the database.
5. A unique tracking ID is generated.
6. The user receives confirmation with the tracking ID.

---
## Implementation Details

### Frontend
The frontend provides a chatbot-style interface where users can submit complaints by filling a form. The interface collects details such as category, department, location, severity, and description.

### Backend
The backend is built using Node.js and Express.js. It exposes API endpoints that receive complaint data from the frontend and process the request.

When a complaint is submitted:
1. The backend receives the form data.
2. A unique tracking ID is generated.
3. The complaint data is stored in the database.
4. A confirmation message with the tracking ID is returned to the user.

### Database
MongoDB is used as the database to store complaint records. Each complaint is stored as a document containing fields such as tracking ID, category, department, location, severity, description, and status.

### Complaint Tracking
Each submitted complaint is assigned a unique tracking ID which can be used later to track the status of the complaint.

---

## Project Structure
neoconnect-project
│
├── frontend
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend
│ ├── server.js
│ ├── routes
│ ├── models
│ └── database connection
│
└── README.md

---

## Installation and Setup

### 1. Clone the Repository
https://github.com/harikaragiri/neoconnect-project.git
### 2. Navigate to Project Folder


cd neoconnect-project


### 3. Install Backend Dependencies


cd backend
npm install


### 4. Run the Server


node server.js


The server will run on:


http://localhost:3000


---

## Database

The project uses MongoDB to store complaint records.

Example complaint document stored in the database:


trackingId: NEO-1773394678086
category: Safety
department: IT
location: Floor 2
severity: High
description: AC not working
status: New


---

## Deployment

Live Application:


https://neoconnect-project.vercel.app


---

## Future Enhancements
- Admin dashboard for managing complaints
- Complaint status updates (New → In Progress → Resolved)
- Email notifications for complaint updates
- User authentication system
- Analytics dashboard for complaints

---

## Conclusion
NeoConnect simplifies the process of complaint registration and tracking through an easy-to-