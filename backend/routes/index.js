const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

// post routes
router.get('/post/', ctrls.post.index)
router.get('/post/:id', ctrls.post.getById)