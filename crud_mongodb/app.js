import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuração do View Engine (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware essencial para o Express entender o JSON enviado no corpo das requisições POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Define que as rotas definidas em 'index.js' serão usadas a partir da raiz '/'
app.use('/', indexRouter);

// Middleware para tratar erros 404 (Not Found)
app.use((req, res, next) => {
  res.status(404).send('Desculpe, a página que você procura não foi encontrada.');
});

// Middleware para tratamento de erros (boa prática)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});