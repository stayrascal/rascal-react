const express = require('express')
const router = express.Router()

router.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

router.get('/', function (req, res, next) {
  res.json()
})

module.exports = router