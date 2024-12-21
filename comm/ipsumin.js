const config = {
  mark: {
    filled: false,
    // other properties
  }
};

const filled = config.mark.filled;
const someColorValue = "#ff0000"; // Example color value

// Conditionally set the color property
filled === false && (config.mark.color = someColorValue);

console.log(config.mark.color); // Output: #ff0000 (if filled is false)
