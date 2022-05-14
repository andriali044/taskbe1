const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');

mongoose.connect('mongodb://127.0.0.1:27017/andri', { useNewUrlParser: true}, () => {
    console.log('connect to db')
});
const db = mongoose.connection;

// db.on('open', () => {
//     server.listen(port);
//     server.on('error', onError);
//     server.on('listening', onListening);
//     console.log('database running');
// });
module.exports = db;