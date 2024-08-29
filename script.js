function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Select the "No" button
const moveRandom = document.querySelector("#move-random");

// Event listener for mouseenter
moveRandom.addEventListener("mouseenter", function(e) {
  moveRandomEl(e.target);
});

// Event listener for touchstart
moveRandom.addEventListener("touchstart", function(e) {
  e.preventDefault(); // Prevent the default touch action
  moveRandomEl(e.target);
});
