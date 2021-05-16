import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('<h1>Oi meu amor</h1>');
})

app.listen(3333);