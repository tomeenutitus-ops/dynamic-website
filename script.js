function loadContent() {
    document.getElementById("updated").textContent =
        new Date().toLocaleTimeString();
}

loadContent();

setInterval(loadContent, 180000);
