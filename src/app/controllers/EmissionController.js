class EmissionController {
    index(req, res) {
        res.render("emission/emission")
    }
    update(req, res) {
        res.render("emission/emission")
    }
    trash(req, res) {
        res.render("emission/trash")
    }
}

module.exports = new EmissionController