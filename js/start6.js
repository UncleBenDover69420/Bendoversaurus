window.addEventListener("click", (start) => {
    gameOver.style.display = "none";
    block.classList.add("blockActive");
    road.firstElementChild.style.animation = "roadAnimate 1s linear infinite";
    cloud.firstElementChild.style.animation = "cloudAnimate 25s linear infinite";
    interval = setInterval(scoreCounter, 200);
})