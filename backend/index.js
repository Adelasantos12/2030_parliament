const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Placeholder route for classification
app.post('/api/classify', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  // In a real implementation, this would call the classification script
  const mockTags = [
    { label: 'IHR (2005) Core Capacities', score: 0.9 },
    { label: 'Public Health Emergency of International Concern (PHEIC)', score: 0.75 },
  ];

  res.json({ tags: mockTags });
});

app.listen(port, () => {
  console.log(`IHR05-scanner backend listening at http://localhost:${port}`);
});