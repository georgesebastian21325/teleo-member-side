const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log('Server on localhost: 3000');
})
// localhost: 3000
// localhost: 4000