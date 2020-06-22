const jwt = require('jsonwebtoken')
const salt = 'ohmygodwhatisthisstringdoinginthisfile'

const authenticationsController = {
  login(req, res) {
    const payload = req.body;
    const token = jwt.sign(payload, salt, { expiresIn: 36000 })
    res.send({ token: `Bearer ${token}` })
  }
}

module.exports = authenticationsController;