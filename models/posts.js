const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    message: String,
});

const Post = mongoose.model('posts', postsSchema);

module.exports = Post;
