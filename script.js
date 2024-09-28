//your JS code here. If required.
// Get the target element with id 'level'
const element = document.getElementById('level');

// Initialize a counter for the DOM level
let levelCount = 0;

// Traverse up the DOM tree, counting the levels
let currentElement = element;
while (currentElement) {
    levelCount++;
    currentElement = currentElement.parentElement;
}

// Display the level of the element
alert(`The level of the element is: ${levelCount}`);
