// Example topology object with a transform property
var topology = {
  transform: {
    scale: [0.001, 0.001],
    translate: [500, 300]
  }
};

// A dummy transform function (for illustration purposes)
function transform$3(transform) {
  return function(point) {
    return [
      point[0] * transform.scale[0] + transform.translate[0],
      point[1] * transform.scale[1] + transform.translate[1]
    ];
  };
}

// Using the transform function
var transformPoint = transform$3(topology.transform);

// Now transformPoint can be used to transform coordinates
console.log(transformPoint([100, 200])); // Output: [600, 500]
