const express = require('express')
const router = express.Router();

router.post('/login', (req, res) => {
  res.send({ token: "jrrtoken"})
})

module.exports = router;