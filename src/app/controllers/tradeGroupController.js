class tradeGroupController {
    index(req, res) {
        res.render("tradeGroup/tradeGroup")
    }
    update(req, res) {
        res.render("tradeGroup/:id")
    }
    trash(req, res) {
        res.render("tradeGroup/trash")
    }
}

module.exports = new tradeGroupController