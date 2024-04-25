const emissionRouter = require("./emission")
const homeRouter = require("./home")
const userRouter = require("./user")
const makeBuildRouter = require("./makeBuild")
const tradeGroupRouter = require("./tradeGroup")
const farmResidentRouter = require("./tradeGroup")
function route(app) {
    app.use("/", homeRouter)
    app.use("/emission", emissionRouter)
    app.use("/makeBuild", makeBuildRouter)
    app.use("/tradeGroup", tradeGroupRouter)
    app.use("/farmResident", farmResidentRouter)
    app.use("/user", userRouter)
}

module.exports = route