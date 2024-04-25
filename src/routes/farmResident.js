const express = require("express")
const FarmResidentController = require("../app/controllers/FarmResidentController")
const router = express.Router()

router.get("/trash", FarmResidentController.trash)
router.put("/update/:id", FarmResidentController.index)
router.get("/", FarmResidentController.index)
module.exports = router
