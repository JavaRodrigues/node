//REST - representational state transfer
// GET
// POST
// PUT / PATCH
// DELETE
import express from 'express';

const app = express();
const PORT = 3000;
const arrResponse = [{name: 'Java Rodrigues', company: '4Digital', course: 'Node.js'},
    {name: 'Roseli Pereira Rodrigues', company: 'ArtsDaZe', course: 'Costura'}, 
    {name: 'Java Rodrigues', company: '4Digital', course: 'JavaScript'}];

app.get('/', (req, res) => {
    res.json(arrResponse);
});

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`));