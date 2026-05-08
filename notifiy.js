// notificationSystem.js

const axios = require("axios");

// API URL
const API_URL = "http://4.224.186.213/evaluation-service/notifications";

// Your Authentication Details

// Priority Mapping
const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

// Function to calculate priority score
function calculatePriority(notification) {

    let typePriority = priorityMap[notification.Type] || 0;

    // Recency score
    let currentTime = new Date();
    let notificationTime = new Date(notification.Timestamp);

    let diffMinutes =
        (currentTime - notificationTime) / (1000 * 60);

    let recencyScore = Math.max(0, 100 - diffMinutes);

    return typePriority * 100 + recencyScore;
}

// Function to fetch notifications
async function fetchNotifications() {

    try {

        const response = await axios.get(API_URL, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaXZhc2hhbmthcmkuZWMyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzOTczNSwiaWF0IjoxNzc4MjM4ODM1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzkxOGNhNTYtMTg5MS00MGJmLWI1OTctMWU2ZGMzZGY5ZjhlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2l2YXNoYW5rYXJpIHIiLCJzdWIiOiJjZTA4ZjI4OC1kMDgxLTRhYWQtOTc2Ny0zMDVkYTVmOTU2ZDgifSwiZW1haWwiOiJzaXZhc2hhbmthcmkuZWMyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJzaXZhc2hhbmthcmkgciIsInJvbGxObyI6IjczNzYyMzFlYzI4NiIsImFjY2Vzc0NvZGUiOiJ1S2FKZm0iLCJjbGllbnRJRCI6ImNlMDhmMjg4LWQwODEtNGFhZC05NzY3LTMwNWRhNWY5NTZkOCIsImNsaWVudFNlY3JldCI6InJhZURubWp6YUNqcXFEcEsifQ.A6ehWyjWyICzcvZghA8xhG5qLiyNzKV_W-YDa21xsx8"
            }
        });

        const notifications = response.data.notifications;

        // Add priority score
        const rankedNotifications = notifications.map((n) => ({
            ...n,
            priorityScore: calculatePriority(n)
        }));

        // Sort by priority score
        rankedNotifications.sort(
            (a, b) => b.priorityScore - a.priorityScore
        );

        // Display Top 10
        console.log("\n========= TOP 10 IMPORTANT NOTIFICATIONS =========\n");

        rankedNotifications.slice(0, 10).forEach((n, index) => {

            console.log(`Notification ${index + 1}`);
            console.log(`ID         : ${n.ID}`);
            console.log(`Type       : ${n.Type}`);
            console.log(`Message    : ${n.Message}`);
            console.log(`Timestamp  : ${n.Timestamp}`);
            console.log(`Priority   : ${n.priorityScore.toFixed(2)}`);
            console.log("--------------------------------------------------");
        });

    } catch (error) {

        console.log("Error Fetching Notifications");
        console.log(error.message);
    }
}

// Execute
fetchNotifications();