const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir les fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => console.log(` App running at http://localhost:${port}`));
