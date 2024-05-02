const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
    // Get mouse positions
    const positionX = event.offsetX;
    const positionY = event.offsetY;
    // Create span block after pointer exists
    const spanElement = document.createElement("span");
    spanElement.style.left = positionX + "px";
    spanElement.style.top = positionY + "px";
    // Change randomly a size of emojies with random
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    // Set timeout between spammings
    setTimeout(() => {
        spanElement.remove()
    }, 3000)
})