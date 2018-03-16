const express = require('express');
const app = express();

app.get('/', (req, res) => res.render());

app.get('/about', (req, res) => res.render());

app.get('/gists', (req, res) => res.render());

app.get('/tutorials', (req, res) => res.render());

app.listen(3000, () => console.log('Example app listening on port 3000!'));
