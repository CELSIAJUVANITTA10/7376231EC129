const express = require("express")

const notificationRoutes =
    require("./routes/notificationRoutes")

const logger =
    require("./middleware/logger")

const app = express()

app.use(express.json())

app.use(logger)

app.use("/notifications", notificationRoutes)

app.get("/", (req, res) => {
    res.send("Server Running")
})

const PORT = 3000

app.listen(PORT, () => {
    process.stdout.write(
        `Server running on port ${PORT}\n`
    )
})