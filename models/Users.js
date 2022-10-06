const { Schema, model } = require('mongoose');

// Email validator for schema
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// User schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    }, email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    }, thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        },
    ], friends: [this]
    }, {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Creating virtual property to create friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Initialize the Users model
const Users = model('users', userSchema);

module.exports = Users;