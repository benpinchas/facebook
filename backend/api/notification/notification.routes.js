const express = require('express')
const requireAuth = require('../../middlewares/requireAuth.middleware')
const {query, update} = require ('./notification.controller.js')

const router = express.Router()

router.get('/', requireAuth,query)

router.put('/', requireAuth, update)

module.exports = router  