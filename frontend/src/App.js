import React, { useState } from 'react';
import './App.css';

function App() {
  const [runId, setRunId] = useState(null);
  const [events, setEvents] = useState([]);

  const backendUrl = "https://resumable-conversation.onrender.com" ;

  const startRun = async () => {
    const response = await fetch(`${backendUrl}/api/start`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Hello AI" })
    });
    const data = await response.json();
    setRunId(data.runId);
    setEvents([]);
  };

  const fetchEvents = async () => {
    const response = await fetch(`${backendUrl}/api/events?runId=${runId}`);
    const data = await response.json();
    setEvents(data.events);
  };

  return (
    <div className="app-container">
      <h1 className="title">✨ Resumable Conversation Demo ✨</h1>
      <div className="button-group">
        <button className="btn start" onClick={startRun}>Start Run</button>
        <button className="btn fetch" onClick={fetchEvents} disabled={!runId}>Fetch Events</button>
      </div>
      <div className="events-container">
        {events.map((event, index) => (
         <p key={index} className="event fade-in">{event}</p>

        ))}
      </div>
    </div>
  );
}

export default App;
