import express from 'express';

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('<html><body><h1>Portal de Noticias!</h1></body></html>');
});

app.get('/tecnologia', (req, res) => {
    res.send('<html><body><h1>Noticias de Tecnologia!</h1></body></html>');
});

app.listen(3000, () => {
  console.log('Servidor rodando com sucesso com Express na porta 3000');
});