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
        ref: 'Users',
        required: true,
    }, 
    reactions: {
        [{ type: Schema.Types.ObjectId, ref: 'reactions'}]
    }
})

/// make the model named 'Thoughts"