import express from 'express';
import msg from '../mod_test.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views'); // Pasta views na raiz do projeto

console.log(msg);

export default app;