    # Caygnus Product Engineering Challenge Submission

## Demo Video
[https://www.loom.com/share/60d0649164a3446c9d895a020dc3f0db]

## Setup Instructions
1. Clone repo: `git clone <https://github.com/Arju2005/resumable-conversation-.git>`
2. Backend:
   - `cd backend`
   - `npm install`
   - `npm start`
   - Runs on `http://localhost:4000`
3. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm start`
   - Runs on `http://localhost:3000`
4. Deployed:
   - Backend: https://resumable-conversation.onrender.com
   - Frontend: https://resumable-conversation.netlify.app

## Architecture
- **Backend (Node.js + Express)**: Provides `/api/start` and `/api/events`. Simulates streaming chunks tied to a runId.
- **Frontend (React)**: Calls backend, stores runId, fetches events, displays them in order.
- **State Management**: React `useState` for runId and events.
- **Failure Handling**: If no runId, `/api/events` returns error. Frontend disables “Fetch Events” until runId exists.
- **Deployment**: Backend on Render, frontend on Netlify.

## Technology Choices
- **React**: Fast UI prototyping, easy state handling.
- **Express**: Simple API server, lightweight.
- **Render + Netlify**: Free hosting, quick deploy.
- **Trade-offs**: Simulated chunks instead of real AI streaming (scope limited for clarity).

## Acceptance Scenarios
- **Successful Path**: Start Run → returns runId → Fetch Events → displays 30 chunks.
- **Failure Path**: Fetch Events without runId → backend returns error → frontend disables button.
- **Recovery Path**: Start Run again → new runId → events fetched correctly.

## Benchmark Evidence
- Simulated 30 chunks delivered consistently.
- Frontend displays all events in order.

## Assumptions & Limitations
- Events are simulated, not real AI output.
- No authentication or persistence beyond runId.
- Focused on resumable conversation core, not full companion.

## AI Usage
- Used Microsoft Copilot to guide architecture, fix endpoint mismatches, and prepare submission content.
- Reviewed and tested all output manually.

## Credibility Note
Previously built a **Smart Agriculture Web App** (MERN stack):
- Solved problem of monitoring soil and crop health.
- My contribution: full frontend (React) and backend APIs (Node/Express).
- Scale: handled multiple sensor inputs, deployed on cloud.
- Key decision: chose MongoDB for flexible schema to store diverse sensor data.
- Public repo: [link if available]
