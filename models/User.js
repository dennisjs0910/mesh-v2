const mongoose = require('mongoose');
const { Schema } = mongoose;
let currentUser;

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    twitterToken: String,
    twitterTokenSecret: String,
    instaToken: String,
    instaId: String
});


mongoose.model('users', userSchema);