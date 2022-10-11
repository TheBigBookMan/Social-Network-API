const router = require('express').Router();
const {
    getThoughtsAll,
    getThoughtSingle,
    postThought,
    putThought,
    deleteThought,
    postReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

// // /api/thoughts
router.route('/')
    .get(getThoughtsAll)
    .post(postThought);    

// // /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughtSingle)
    .delete(deleteThought)
    .put(putThought);

// // /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .put(postReaction)
    .delete(deleteReaction)

module.exports = router;