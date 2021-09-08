const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log('Connection ON')
    })
    .catch(err => {
        console.log('There was an error', err);
    })

