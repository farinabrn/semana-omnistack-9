const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-a8pps.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);