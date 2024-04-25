class UserController {
    signin(req, res) {
        res.render("user/login")
    }
    signup(req, res) {
        res.render("user/signup")
    }
    forgotPassword(req, res) {
        res.render("user/forgotPassword")
    }
}

module.exports = new UserController