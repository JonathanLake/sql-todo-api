const bodyParser = require('body-parser');
const express = require('express');

const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/users', async (req, res) => {
    const newUser = req.body;
    const user = await User.query().insert(newUser);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});

