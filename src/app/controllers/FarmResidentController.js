class FarmResidentController {
    index(req, res) {
        res.render("farmResident/farmResident")
    }
    update(req, res) {
        res.render("farmResident/farmResident")
    }
    trash(req, res) {
        res.render("farmResident/trash")
    }
}

module.exports = new FarmResidentController