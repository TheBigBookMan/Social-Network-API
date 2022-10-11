const { connect, connection } = require('mongoose');

// Create connection to MongoDB
connect('mongodb://127.0.0.1:27017/socialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;