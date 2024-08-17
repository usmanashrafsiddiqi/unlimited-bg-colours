const randomColors = function () {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId; 

// Function to change the background color
const backChange = function () {
    document.body.style.backgroundColor = randomColors();
};

// Function to start changing the background color at intervals
const changingBg = function () {
    intervalId = setInterval(backChange, 1000);
};

// Function to stop changing the background color
const stopping = function () {
   
    clearInterval(intervalId);
};

// Add event listeners to start and stop buttons
document.querySelector("#start").addEventListener("click", changingBg);
document.querySelector("#stop").addEventListener("click", stopping);