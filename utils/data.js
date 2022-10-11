// Import object
const { ObjectId } = require('mongoose').Types;

// Create users seed data
const userSeed = [
    {
        username: "BennyBoy",
        email: "bennyboy@google.com"
    },
    {
        username: "HarryGuy",
        email: "harry@test.com"
    }, 
    {
        username: "SallyPaints",
        email: "sallypaints@google.com"
    }
];

// Create thought seed data
const thoughtsSeed = [
    {
        thoughtText: 'I am really enjoying coding.',
        reactions: [
            {
                reactionBody: 'This is really good.',
                username: 'SallyPaints'
            },
            {
                reactionBody: 'I am also enjoying coding.',
                username: 'BennyBoy'
            }
        ]
    },
    {
        thoughtText: 'Javascript is hard to learn.',
        reactions: [
            {
                reactionBody: 'I also agree that it is hard to learn.',
                username: 'BennyBoy'
            }
        ]
    }
];

module.exports = {userSeed, thoughtsSeed};