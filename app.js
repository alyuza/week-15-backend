require('dotenv').config();
const express = require('express');
const app = express();
const databaseMiddleware = require('./middleware/database-middleware');
const crudRouter = require('./routes/crud-router.js');
const middleWares = require('./middleware/index')

const port = process.env.PORT || 8080;

app.use(express.json());
// middleWares();
app.use(databaseMiddleware);

app.use('/try', crudRouter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
})