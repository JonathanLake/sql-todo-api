const bodyParser = require('body-parser');
const express = require('express');

// Require routes.
const users = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

// Add middleware.
app.use(bodyParser.json());
app.use('/users', users);


app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});