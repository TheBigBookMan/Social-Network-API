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
    reactions: 
        [{ type: Schema.Types.ObjectId, ref: 'reactions'}],
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

module.exports = Thoughts;