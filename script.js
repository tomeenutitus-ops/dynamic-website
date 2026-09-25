kfetch("https://ydjds63620.execute-api.ap-south-1.amazonaws.com/content")
    .then(response => response.json())
    .then(data => {
        document.getElementById("title").textContent = data.title;
        document.getElementById("message").textContent = data.description;
        document.body.style.background = data.theme === "dark" ? "#111" : "#fff";
        document.getElementById("updated").textContent =
            new Date().toLocaleTimeString();
    })
    .catch(error => {
        console.error("Error:", error);
    });
