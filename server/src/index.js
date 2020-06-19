const express = require('express');

const PORT = 3001;

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World from Javascript' });
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
