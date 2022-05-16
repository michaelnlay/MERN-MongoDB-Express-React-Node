//from Step 5A in server.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@clustermay.psr7l.mongodb.net/jokes_db?retryWrites=true&w=majority', { //for MongoDB cloud
// mongoose.connect('mongodb://localhost/name_of_your_DB', { //this for people with local MongoDB installed locally
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));