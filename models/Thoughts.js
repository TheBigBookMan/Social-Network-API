const { Schema, model } = require('mongoose');

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
        get: (date) => timeSince(date),
    }
});

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
        get: (date) => timeSince(date),
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }, 
    reactions: 
        [reactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
        }, 
        id: false,
    }
);

// Create virtual property reactionsCount that gets the amount of reactions pre thought
thoughtSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
});

// Creating the thoughts model with thoughtSchema
const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;