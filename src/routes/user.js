const express = require("express")
const { signin, signup, forgotPassword } = require("../app/controllers/UserController")
const router = express.Router()

router.get("/login", signin)
router.get("/signup", signup)
router.get("/forgotPassword", forgotPassword)
module.exports = router