const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

// iniciando o app
const app = express();
app.use(express.json({limit:'50mb'}));
app.use(cors());

// iniciando banco de dados
mongoose.connect("mongodb://localhost:27017/sorteacher",
{ useNewUrlParser: true, 
  useUnifiedTopology: true
});
requireDir("./src/models/");

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
