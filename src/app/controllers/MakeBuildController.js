class makeBuildController {
    index(req, res) {
        res.render("makeBuild/makeBuild")
    }
    update(req, res) {
        res.render("makeBuild/:id")
    }
    trash(req, res) {
        res.render("makeBuild/trash")
    }
}

module.exports = new makeBuildController