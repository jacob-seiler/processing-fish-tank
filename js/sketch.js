/**

    Jacob Seiler
    12/4/2016
    Fish Tank

    - 3 Schools of fish swimming around
    - Seaweed and sand at the bottom of the tank
    * Click to make bubbles

**/

var fish = []; // Stores all fish
var bubbles = []; // Stores all bubbles

// Converts a string to an integer
var convertStringToInt = function(numb) {
    for (var i = -600; i <= 600; i += 1) { // Goes through every number from -600 to 600
        if (numb === "" + i) {
            return i; // If the number + quotes is equal to the string than return the number
        }
    }
};

// Draws the tank
var tank = function(x, y) {
    noStroke();
    fill(255, 255, 255, 100);
    rect(x, y, 400, 400); // The glass
    rect(x, y, 400, 10); // The top
};

// Adds a bubble
var bubble = function(x, y) {
    append(bubbles, x + "|" + y + "|0|" + ceil(random(10, 25))); // Adds a bubble to the array
};

// Manages all bubbles
var bubbleManager = function() {
    var nb = []; // Blank array
    
    for (var i = 0; i < bubbles.length; i++) { // Goes through every bubble
        var x = convertStringToInt(bubbles[i].split("|")[0]); // The x value of the bubble
        var y = convertStringToInt(bubbles[i].split("|")[1]); // The y value of the bubble
        var up = convertStringToInt(bubbles[i].split("|")[2]); // The offset of the bubble
        var size = convertStringToInt(bubbles[i].split("|")[3]); // The size of the bubble
        
        if (up >= 450) {
            continue; // If the bubble is off the screen than remove it
        }
        
        up++; // Offset the bubble 1 pixel higher
        fill(255, 255, 255, 100);
        stroke(255, 255, 255);
        ellipse(x, y - up, size, size); // Draw the bubble
        fill(255, 255, 255, 0);
        stroke(255, 255, 255);
        arc(x, y - up, size * 0.8, size * 0.8, 173, 258); // Draw the bubble glare
        
        append(nb, x + "|" + y + "|" + up + "|" + size); // Save the bubble with the new offset
    }
    
    bubbles = nb; // Set the bubbles array to the new saved bubbles
};

// Adds a fish
var addFish = function(id, centerX, centerY, bodyLength, bodyHeight, tailWidth, tailHeight, r, g, b, speed) {
    
    for (var i = 0; i < fish.length; i++) {
        if (convertStringToInt(fish[i].split("|")[0]) === id) {
            return false; // If that fish ID already exists, than don't add the fish
        }
    }
    
    append(fish, id + "|" + centerX + "|" + centerY + "|" + bodyLength + "|" + bodyHeight + "|" + tailWidth + "|" + tailHeight + "|" + r + "|" + g + "|" + b + "|" + speed); // Adds the fish to the array
};

// Manages all fish
var fishManager = function() {
    var nf = []; // Blank array
    
    for (var i = 0; i < fish.length; i++) { // Goes through every fish
        var id = convertStringToInt(fish[i].split("|")[0]); // The ID of the fish
        var centerX = convertStringToInt(fish[i].split("|")[1]); // The x value of the fish
        var centerY = convertStringToInt(fish[i].split("|")[2]); // The y value of the fish
        var bodyLength = convertStringToInt(fish[i].split("|")[3]); // The body length of the fish
        var bodyHeight = convertStringToInt(fish[i].split("|")[4]); // The body height of the fish
        var tailWidth = convertStringToInt(fish[i].split("|")[5]); // The tail width of the fish
        var tailHeight = convertStringToInt(fish[i].split("|")[6]); // The tail height of the fish
        var r = convertStringToInt(fish[i].split("|")[7]); // The red value of the fish color
        var g = convertStringToInt(fish[i].split("|")[8]); // The green value of the fish color
        var b = convertStringToInt(fish[i].split("|")[9]); // The blue value of the fish color
        var speed = convertStringToInt(fish[i].split("|")[10]); // The speed of the fish
        
        noStroke();
        fill(r, g, b); // Set the fish color
        
        ellipse(centerX, centerY, bodyLength, bodyHeight); // The body of the fish
        
        triangle(centerX-bodyLength/2, centerY, centerX-bodyLength/2-tailWidth, centerY-tailHeight, centerX-bodyLength/2-tailWidth, centerY+tailHeight); // The tail of the fish
        
        fill(33, 33, 33);
        ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5); // The fish eye
        
        if (centerX > 490) {
            centerX = -80; // If the fish goes off screen than set them back to the other side
        }
        
        append(nf, id + "|" + (centerX + speed) + "|" + centerY + "|" + bodyLength + "|" + bodyHeight + "|" + tailWidth + "|" + tailHeight + "|" + r + "|" + g + "|" + b + "|" + speed); // Saves the fish but changes the x value to move the fish
    }
    
    fish = nf;  // Set the bubbles array to the new saved bubbles
};

// Draws seaweed
var seaweed = function(x, y) {
    fill(24, 133, 19);
    stroke(24, 133, 19);
    strokeWeight(3);
    
    line(x, y - 40, x, y);
    line(x + 5, y - 29, x + 2, y);
    line(x - 5, y - 29, x - 3, y);
};

// Where all the functions are called 
draw = function() {
    fill(89, 216, 255);
    rect(-10, -10, 420, 420);
    
    // School of red fish
    addFish(0, 225, 94, 30, 20, 10, 10, 235, 105, 105, 1);
    addFish(1, 245, 119, 30, 20, 10, 10, 235, 105, 105, 1);
    addFish(2, 196, 137, 30, 20, 10, 10, 235, 105, 105, 1);
    addFish(3, 186, 116, 30, 20, 10, 10, 235, 105, 105, 1);
    addFish(4, 255, 152, 30, 20, 10, 10, 235, 105, 105, 1);
    
    // School of green fish
    addFish(5, 285, 233, 40, 20, 20, 10, 90, 224, 96, 1);
    addFish(6, 314, 269, 40, 20, 20, 10, 90, 224, 96, 1);
    addFish(7, 249, 257, 40, 20, 20, 10, 90, 224, 96, 1);
    
    // School of blue fish
    addFish(8, 123, 200, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(9, 148, 194, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(10, 117, 180, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(11, 108, 215, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(12, 136, 219, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(13, 98, 197, 15, 15, 7, 7, 72, 166, 242, 1);
    addFish(14, 58, 213, 15, 15, 7, 7, 72, 166, 242, 1);
    
    for (var i = 0; i <= 3; i++) {
        seaweed((i * 180) + 20, 389); // Draws seaweed
    }
    
    fill(255, 204, 0);
    noStroke();
    ellipse(178, 396, 479, 39); // Sand at the bottom of the tank
    
    tank(0, 20); // Draws the tank
    
    fishManager(); // Moves the fish
    bubbleManager(); // Moves the bubbles
};

// Checks for when the mouse is pressed
var mousePressed = function() {
    bubble(mouseX, mouseY); // Adds a bubble at the mouse location
};
