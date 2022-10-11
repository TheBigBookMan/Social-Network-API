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
    },

// getThoughtSingle, --- get singular thought
    getThoughtSingle(req, res) {
        Thoughts.findOne({_id: req.params.thoughtId})
            .select('-__v')
            .then(async (thought) => {
                thought ? res.json(thought) : res.status(404).json({message: 'No user with this id'})
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },

// postThought, --- create a thought
    postThought(req, res) {
        Thoughts.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

// putThought, --- update a thought
    putThought(req, res) {
        Thoughts.findOneAndUpdate({_id: req.params.thoughtId},
            {thoughtText: req.body.thoughtText, username: req.body.username},
            {new: true},
            (err, result) => {
                result ? res.status(200).json(result) : res.status(500).json({message: "Something went wrong"})
            })
    },

// deleteThought, --- delete a thought
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({_id: req.params.thoughtId},
            (err, result) => {
                result ? res.status(200).json(result) : res.status(500).json({message: 'Something went wrong'})
            })
    },

// '/thoughts/:thoughtId/reactions
// postReaction, --- create a reaction
    postReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((reaction) => {
            reaction ? res.json(reaction) : res.status(404).json({message: 'Something went wrong'})
        })
        .catch((err) => res.status(500).json(err))
    },

// deleteReaction --- delete a reaction
    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.body.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((reaction) => {
            reaction ? res.json(reaction) : res.status(404).json({message: "Something went wrong"})
        })
        .catch((err) => res.status(500).json(err))
    }
};