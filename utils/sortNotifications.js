const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
}

const sortNotifications = (notifications) => {
    return notifications.sort((a, b) => {
        const priorityDifference =
            priorityMap[b.Type] - priorityMap[a.Type]

        if (priorityDifference !== 0) {
            return priorityDifference
        }

        return new Date(b.Timestamp) - new Date(a.Timestamp)
    })
}

module.exports = sortNotifications