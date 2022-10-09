const { ObjectId } = require('mongoose').Types;
const { Users, Thoughts } = require('../models');

module.exports = {

// '/thoughts'
// getThoughtsAll, --- get all thoughts
    getThoughtsAll(req, res) {
        Thoughts.find()
        .then(async (thoughts) => {
            const thoughtObj = {
                thoughts
            };
            return res.json(thoughtObj)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        });
    }

// getThoughtSingle, --- get singular thought

// postThought, --- create a thought

// putThought, --- update a thought

// deleteThought, --- delete a thought

// '/thoughts/:thoughtId/reactions
// postReaction, --- create a reaction

// deleteReaction --- delete a reaction

};