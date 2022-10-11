// Import models and methods
const { ObjectId } = require('mongoose').Types;
const { Users, Thoughts } = require('../models');

module.exports = {
// '/users'
// getUsersAll- get all users
    getUsersAll(req, res) {
        Users.find()
        .then(async (users) => {
            const usersObj = {
                users
            };
            return res.json(usersObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

// getUsersSingle- get singular user by their id
    getUsersSingle(req, res) {
        Users.findOne({ _id: req.params.userId})
            .select('-__v')
            .then(async (user) => {
                !user ? res.status(404).json({ message: 'No user with that ID'}) : res.json(user);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

// postUser- add a new user
    postUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

// putUser- update user by its id
    putUser(req, res) {
        Users.findOneAndUpdate({_id: req.params.userId},
            {username: req.body.username, email: req.body.email},
            {new: true},
            (err, result) => {
                result ? res.status(200).json(result) : res.status(500).json({ message: 'Something went wrong'});
            });
    },

// deleteUser- delete user by id
    deleteUser(req, res) {
        Users.findOneAndDelete({_id: req.params.userId},
            (err, result) => {
                result ? res.status(200).json(result) :
                res.status(500).json({ message: 'Something went wrong'});
            });
    },

// '/users/:userId/friends/:friendId'
// postFriend- post a new friend to users friend list
    postFriend(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true},
            (err, result) => {
                result ? res.status(200).json(result) : res.status(500).json({message: 'Something went wrong'});
            }
        );
    },

// deleteFriend- delete a friend from a users friend list
    deleteFriend(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {runValidators: true, new: true}
        )
        .then((friend) => {
            friend ? res.json(friend) : res.status(404).json({message: 'Something went wrong'});
        })
        .catch((err) => res.status(500).json(err));
    },
};