const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/bio', (req, res) => {
  res.sendFile(path.join(__dirname, './views/bio.html'));
});

app.get('/programmes', (req, res) => {
  res.sendFile(path.join(__dirname, './views/programmes.html'));
});

app.get('/staff', (req, res) => {
  res.sendFile(path.join(__dirname, './views/staff.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './views/contact.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});     


