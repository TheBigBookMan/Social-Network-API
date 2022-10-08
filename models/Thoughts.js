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
    
})

module.exports = Thoughts;