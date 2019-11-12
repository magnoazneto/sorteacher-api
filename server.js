const express = require('express');
const mongoose = require('mongoose');


// iniciando o app
const app = express();

// iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/sorteacher-api',
{ useNewUrlParser: true, 
  useUnifiedTopology: true
});
require('./src/models/Task');


// criando rota
app.get('/', (req, res) => {
  res.send('Bem vindo ao sorteacher');
});

app.listen(3002);