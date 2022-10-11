// Import connection, models and seed data
const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const {userSeed, thoughtsSeed} = require('./data');

connection.on('error', (err) => err);

// Create connection and load the seed data into models
connection.once('open', async () => {
    console.log('connected');

    // Drop existing documents from models
    await Users.deleteMany({});
    await Thoughts.deleteMany({});

    await Users.collection.insertMany(userSeed);
    await Thoughts.collection.insertMany(thoughtsSeed);
    console.log('Seed complete');
});
