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
    .post(postUser)
    .put(putUser);

// '/api/users/:userId'
router.route('/:userId')
    .get(getUsersSingle)
    .delete(deleteUser);

// /users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(postFriend)
    .delete(deleteFriend);

module.export = router;