const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

app.get('/*', function(_, res) {
 res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
