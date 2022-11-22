global.db = require('./db');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definindo rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message:'Funcionando!'}));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API FUNC.!');