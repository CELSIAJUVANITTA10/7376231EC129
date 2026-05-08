const axios = require("axios")

const fetchNotifications = async () => {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaXZhc2hhbmthcmkuZWMyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzOTczNSwiaWF0IjoxNzc4MjM4ODM1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzkxOGNhNTYtMTg5MS00MGJmLWI1OTctMWU2ZGMzZGY5ZjhlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2l2YXNoYW5rYXJpIHIiLCJzdWIiOiJjZTA4ZjI4OC1kMDgxLTRhYWQtOTc2Ny0zMDVkYTVmOTU2ZDgifSwiZW1haWwiOiJzaXZhc2hhbmthcmkuZWMyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJzaXZhc2hhbmthcmkgciIsInJvbGxObyI6IjczNzYyMzFlYzI4NiIsImFjY2Vzc0NvZGUiOiJ1S2FKZm0iLCJjbGllbnRJRCI6ImNlMDhmMjg4LWQwODEtNGFhZC05NzY3LTMwNWRhNWY5NTZkOCIsImNsaWVudFNlY3JldCI6InJhZURubWp6YUNqcXFEcEsifQ.A6ehWyjWyICzcvZghA8xhG5qLiyNzKV_W-YDa21xsx8`
                }
            }
        )

        return response.data.notifications

    } catch (error) {

        console.log(error.message)

        throw error
    }
}

module.exports = fetchNotifications