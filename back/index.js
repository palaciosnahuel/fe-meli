const express = require('express')
const service = require('./service')
const app = express()
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/api/items', (req, res) => {
    service.getProducts(req.query.q , req.query.limit)
        .then(products => res.json(products))
        .catch( (error) => {
            console.error(error.stack);
            res.status(500).send(error)
        });
});

app.get('/api/items/:id', (req, res) => {
    service.getProduct(req.params.id)
        .then(product => res.json(product))
        .catch( (error) => {
            console.error(error.stack);
            res.status(500).send(error)
        });
});

app.get('/api/items/:id/description', (req, res) => {
    service.getProduct(req.params.id)
        .then(products => res.json(products))
        .catch( (error) => {
            console.error(error.stack);
            res.status(500).send(error)
        });
});



app.listen(port, () => console.log(`Server iniciado en el puerto: ${port}!`))