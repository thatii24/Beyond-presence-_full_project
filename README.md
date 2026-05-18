
# StandIn — Frontend

> Your AI-powered stand-in for meetings you can't miss.

StandIn is a prototype meeting assistant built during a hackathon.
It allows users to create an AI-powered stand-in that can answer basic meeting questions on their behalf when they are unavailable or busy.

This frontend connects to an OpenAI-compatible backend and supports live meeting interaction, AI-generated responses, optional audio playback, and automatic meeting summaries.

---

# Project Status

* Prototype stage
* Frontend meeting flow functional in concept
* OpenAI-compatible API integration added
* Some features are experimental or incomplete
* Additional fixes and improvements planned

---

# Features

* **Setup Screen**

  * Enter meeting title
  * Add role/context
  * Provide personal updates
  * Add custom instructions for AI behavior

* **Meeting Room**

  * Ask questions in real time
  * AI responds as the user
  * Optional audio playback using Beyond Presence

* **Summary Screen**

  * Meeting duration
  * Key discussion points
  * Topics covered
  * Full transcript review

---

# Tech Stack

| Tool            | Purpose             |
| --------------- | ------------------- |
| React (Vite)    | Frontend framework  |
| Tailwind CSS v3 | Styling             |
| Axios           | API communication   |
| Netlify         | Frontend deployment |

---

# Project Structure

```bash
standin-frontend/
├── src/
│   ├── components/
│   │   ├── SetupForm.jsx
│   │   ├── MeetingRoom.jsx
│   │   ├── Summary.jsx
│   │   ├── AvatarBubble.jsx
│   │   └── TranscriptBubble.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

# OpenAI-Compatible API Setup

This project now uses an OpenAI-compatible Chat Completions API.

Create a `.env` file in your backend project:

```env
API_BASE_URL=https://api.openai.com/v1
API_KEY=your_api_key_here
MODEL_NAME=gpt-4o-mini
```

You may also use another OpenAI-compatible provider by changing:

* `API_BASE_URL`
* `API_KEY`
* `MODEL_NAME`

while keeping the same request structure.

---

# Getting Started

## Prerequisites

* Node.js v18+
* Backend server running locally
* API key configured

---

## Installation

```bash
# Clone repository
git clone https://github.com/YOURUSERNAME/standin-frontend.git

# Open project
cd standin-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

# Backend Connection

This frontend communicates with the backend API.

Default local backend:

```bash
http://localhost:3001
```

---

# API Endpoints

| Method | Endpoint       | Purpose                                 |
| ------ | -------------- | --------------------------------------- |
| `POST` | `/api/setup`   | Save meeting/user context               |
| `POST` | `/api/ask`     | Send question and receive AI response   |
| `GET`  | `/api/summary` | Retrieve meeting summary and transcript |

---

# Common Issues

## Tailwind CSS Not Working

If Tailwind v4 installs accidentally:

```bash
npm uninstall tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

---

## API Calls Failing

Make sure:

* Backend server is running
* `.env` values are correct
* API key is valid

---

## Hot Reload Stops Working

Restart Vite:

```bash
Ctrl + C
npm run dev
```

---

# Deployment

## Deploy Frontend to Netlify

1. Push project to GitHub
2. Open [Netlify](https://www.netlify.com?utm_source=chatgpt.com)
3. Import repository
4. Configure:

   * Build command:

     ```bash
     npm run build
     ```
   * Publish directory:

     ```bash
     dist
     ```
5. Deploy

---

# Production Backend Setup

After deploying backend services:

Replace:

```bash
http://localhost:3001
```

with your production backend URL.

Example:

```bash
https://your-backend-name.railway.app
```

---

# Hackathon Context

This project was prepared for the CursorSriLanka 24h Buildathon held on **16–17 May 2026**.

Due to hackathon time constraints, some features are still experimental and may contain bugs.

---

# Acknowledgements

Special thanks to **Team Nexa** for:

* Project planning
* Research and idea development
* Collaboration during the hackathon
* Testing and rapid prototyping

Huge appreciation to all contributors and team members who helped make this prototype possible 🚀

---

# Related Projects

* Backend API server
* Beyond Presence voice integration
* AI meeting summary system
* Real-time transcript handling

---

# Future Improvements

* Real-time voice conversation
* Better memory/context handling
* Multi-user meeting rooms
* Improved AI response accuracy
* Authentication system
* Persistent meeting history
* Better UI/UX polish

---
