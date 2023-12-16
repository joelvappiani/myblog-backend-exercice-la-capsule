var express = require('express');
var router = express.Router();
const Post = require('../models/posts');
/* GET home page. */
router.get('/allPosts', (req, res) => {
    Post.find().then((posts) => {
        res.json({ posts });
    });
});
router.post('/addPost', (req, res) => {
    const newPost = new Post({
        message: req.body.message,
    });
    newPost.save().then((post) => res.json({ post }));
});
router.delete('/deletePost', (req, res) => {
    Post.deleteOne({ message: req.body.message }).then(() =>
        res.json({ message: 'Post deleted' })
    );
});

module.exports = router;
