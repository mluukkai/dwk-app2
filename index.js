const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello ArgoCD, also CI works now');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});