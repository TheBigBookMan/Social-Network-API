const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const userSeed = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected')

    // Drop existing documents from models
    await Users.deleteMany({});
    await Thoughts.deleteMany({});

    await Users.collection.insertMany(userSeed);
    console.log('Seed complete')

})