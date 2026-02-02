const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

// Move NO button when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button action
yesBtn.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    music.play();
});
