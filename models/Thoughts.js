const { Schema, model } = require('mongoose');

// Thoughts schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    }, 
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }, 
    // THIS WILL BE IN REFERENCE TO A SCHEMA STATE BELOW WHICH IS THE REACTIONS SCHEMA SUBDOC
    reactions: 
        [reactionsSchema],
    toJSON: {
        virtuals: true,
    }, 
    id: false,
});

// Create virtual property reactionsCount that gets the amount of reactions pre thought
thoughtSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtSchema);

// Schema for reactions subdocument of Thoughts
const reactionsSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: () => Date.now(),
    }
})

module.exports = Thoughts;