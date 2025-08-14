//REST - representational state transfer
// GET
// POST
// PUT / PATCH
// DELETE
import express from 'express';
import msg from './mod_test.js';

const app = express();
const PORT = 3000;
const arrResponse = [{nome: 'Java Rodrigues', company: '4Digital', course: 'Node.js', age: 47},
    {nome: 'Roseli Pereira Rodrigues', company: 'ArtsDaZe', course: 'Costura', age: 40}, 
    {nome: 'Heitor Pereira Rodrigues', company: '4Digital', course: 'JavaScript', age: 20}
];

app.get('/', (req, res) => {
    res.json(arrResponse);
});

app.listen(PORT, () => 
    console.log(msg));