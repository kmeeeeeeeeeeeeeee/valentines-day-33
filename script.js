// script.js

//Function to handle button click events
function selectOption(option) {
    // Check if the option is clicked
    if (option === 'yes') {
        displaygglltt();
    } else if (option === 'no') {
        document.getElementById('no-buttoon').innerText = 'you sure';
        var yesButton = document.getElementById("yes-button");
        var currentfontSize = window.getComputedStyle(yesButton).getPropertyValue("font-size");
        var newFontSize = parseFloat(currentfontSize) + 2;
        yesButton.style.fontSize = newFontSize + "px";
    } else if(option === "no") {
        document.getElementById("no-button").innerText = "you sure";
        var yesButton = document.getElementById("yes-buttoon");
        var currentfontSize = window.getComputedStyle(yesButton).getPropertyValue("font-size");
        var newFontSize = parseFloat(currentfontSize) + 2;
        yesButton.style.fontSize = newFontSize + "px";
    } else {
        // if neither button is clicked, show an alert
        alert("KMEEEE");
    }
}

    // function to display gltt initially
function displaygltt() {
    // Get the container where the image will be displayed
    var imagecontainer = document.getElementById("image-container");
    // Create a new image element for gltt
    var glttImage = new Image();
    // Set the source for the gltt image
    glttImage.src = "gltt.jpg";
    // Se6t alt text for the image
    glttImage.alt = "gltt Image";
    //When the image is fully loaded, append it to the image container
    glttImage.onload = function() {
        imagecontainer.appendChild(glttImage);
    };
}
// function to display gglltt.gif
function displaygglltt() {
    // Clear any existing images in the container
    document.getElementById("image-container").innerHTML = "";
    // Get the container where the image will be displayed
    var imagecontainer = document.getElementById("image-container");
    // Create a new image element for gglltt
    var ggllttImage = new Image();
    // Set the source for the gglltt image
    ggllttImage.src = "gglltt.gif";
    // Set alt text for the image
    ggllttImage.alt = "gglltt Image";
    // When the image is fully loaded, append it to the image container
    ggllttImage.onload = function() {
        imagecontainer.appendChild(ggllttImage);
        // Hide the options after displaying the image
        document.getElementById("options" ).style.display = "none";
    };
}
// Display the gltt.jpg initially 
displaygltt();



