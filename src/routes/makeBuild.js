const express = require("express")
const router = express.Router()
const MakeBuildController = require("../app/controllers/MakeBuildController")

router.get("/", MakeBuildController.index)
router.get("/trash", MakeBuildController.trash)
router.put("/makeBuild/:id", MakeBuildController.update)

module.exports = router