const { ObjectId } = require('mongoose').Types;
const { Users, Thoughts } = require('../models');

module.exports = {
// routes for user '/users'
// getUsersAll -- get all users
    getUsersAll(req, res) {
        Users.find()
        .then(async (users) => {
            const usersObj = {
                users
            };
            return res.json(usersObj)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err)
        })
    }

// getUsersSingle --- get singular user by their id

// postUser add a new user

// putUser update user by its id

// deleteUser ---- delete user by id


// other router for users friends '/users/:userId/friends/:friendId'
// postFriend// post a new friend to users friend list

// deleteFriend---// delete a friend from a users friend list

};