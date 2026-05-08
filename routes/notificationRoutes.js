const express = require("express")

const fetchNotifications =
    require("../services/notificationService")

const sortNotifications =
    require("../utils/sortNotifications")

const router = express.Router()

router.get("/top", async (req, res) => {
    try {
        const notifications =
            await fetchNotifications()

        const sortedNotifications =
            sortNotifications(notifications)

        const topNotifications =
            sortedNotifications.slice(0, 10)

        res.status(200).json({
            topNotifications
        })
    } catch (error) {

    console.log(error.message)

    res.status(500).json({
        message: "Error fetching notifications"
    })
}
})

module.exports = router