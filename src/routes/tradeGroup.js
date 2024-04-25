const express = require("express")
const tradeGroupController = require("../app/controllers/tradeGroupController")
const router = express.Router()

router.get("/", tradeGroupController.index)
router.put("/update/:id", tradeGroupController.update)
router.get("/trash", tradeGroupController.trash)

module.exports = router