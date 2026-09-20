const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let runId = null;

// Start a run
app.post('/api/start', (req, res) => {
  runId = Date.now().toString();
  res.json({ runId });
});

// Fetch events (simulate streaming chunks)
app.get('/api/events', (req, res) => {
  if (!runId) {
    return res.status(400).json({ error: 'No run started' });
  }
  const chunks = Array.from({ length: 30 }, (_, i) => `Chunk ${i + 1} of reply`);
  res.json({ runId, events: chunks });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
