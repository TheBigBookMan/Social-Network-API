// Import routes and methods
const router = require('express').Router();
const {
    getUsersAll,
    getUsersSingle,
    postUser,
    putUser,
    deleteUser,
    postFriend,
    deleteFriend
} = require('../../controllers/userController');

// '/api/users'
router.route('/')
    .get(getUsersAll)
    .post(postUser);

// '/api/users/:userId'
router.route('/:userId')
    .put(putUser)
    .get(getUsersSingle)
    .delete(deleteUser);

// /users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .put(postFriend)
    .delete(deleteFriend);

module.exports = router;