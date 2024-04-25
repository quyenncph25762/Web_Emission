const express = require("express")
const router = express.Router()
const EmissionController = require("../app/controllers/EmissionController")
router.get("/trash", EmissionController.trash)
router.put("/update/:id", EmissionController.index)
router.get("/", EmissionController.index)

module.exports = router

