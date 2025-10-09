const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const pdf = require('pdf-parse');
const { diffLines } = require('diff');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());

// --- File Upload Setup ---
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const upload = multer({ dest: uploadDir });

// --- Mock RSI Patterns ---
const rsiPatterns = {
  'Vigilancia y notificación': /notificar OMS|Centro Nacional de Enlace|24 horas/gi,
  'Puntos de entrada': /puertos|aeropuertos|frontera|sanidad internacional/gi,
  'Medidas sanitarias': /cuarentena|aislamiento|examen sanitario/gi,
  'Documentos y certificados': /certificado internacional de vacunación|declaración marítima/gi,
  'Coordinación y emergencias (ESPII)': /Comité de Emergencias|PHEIC|emergencia internacional/gi,
  'Datos personales y garantías': /tratamiento de datos|confidencialidad/gi,
  'Financiamiento en emergencia': /fondos extraordinarios|erogaciones|adquisiciones urgentes/gi,
};

// --- API Endpoints ---

// POST /upload: Receives a PDF, extracts the text, and returns it.
app.post('/upload', upload.single('document'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);
    res.json({ text: data.text });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'Failed to process PDF.' });
  } finally {
    // Clean up the uploaded file
    fs.unlinkSync(req.file.path);
  }
});

// POST /classify: Applies RSI rules to the provided text.
app.post('/classify', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided for classification.' });
  }

  const detectedTags = Object.entries(rsiPatterns)
    .map(([label, pattern]) => {
      const matches = text.match(pattern);
      if (matches) {
        return { label, score: (matches.length / (text.length / 10000)).toFixed(2) };
      }
      return null;
    })
    .filter(Boolean);

  res.json({ tags: detectedTags });
});

// POST /diff: Compares two texts and shows differences.
app.post('/diff', (req, res) => {
  const { textA, textB } = req.body;
  if (!textA || !textB) {
    return res.status(400).json({ error: 'Two texts are required for comparison.' });
  }
  const diff = diffLines(textA, textB);
  res.json({ diff });
});

// GET /stats: Returns mock statistics.
app.get('/stats', (req, res) => {
  res.json({
    totalDocuments: 150,
    themesDetected: {
      'vigilancia-notificacion': 75,
      'puntos-entrada': 50,
      'medidas-sanitarias': 120,
    },
  });
});

app.listen(port, () => {
  console.log(`RSI-Scanner backend listening at http://localhost:${port}`);
});