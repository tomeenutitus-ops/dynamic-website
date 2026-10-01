const API_URL =
    "https://7s1pmx9a2l.execute-api.ap-south-1.amazonaws.com/content";

async function loadContent() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById("title").textContent = data.title;
        document.getElementById("message").textContent = data.description;
        document.getElementById("updated").textContent = data.updated;

        document.body.style.backgroundColor = data.background;
        document.body.style.color = data.textColor;

    } catch (error) {
        console.error("Failed to load content:", error);
    }
}

loadContent();

setInterval(loadContent, 180000);
// webhook test
