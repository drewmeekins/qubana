
const db = require('../models')
const Post = require('../models/post')

// get all
const index = (req, res) => {
    db.Post.find({}, (error, posts) => {
        if(error) return res.status(404).json({
            error: error.message
        })
        return res.status(200).json({
            posts,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}

// find by id
const getById = (req, res) => {
    db.Post.find({ postId: req.params.id }, (error, posts) => {
        if (error) return(404).json({ error: error.message })
        return res.status(200).json({
            posts,requestedAt: new Date().toLocaleDateString()
        })
    })
}