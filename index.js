const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');  

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + '/movies.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur lors de la lecture du fichier');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`L'application écoute sur http://localhost:${port}`);
});
