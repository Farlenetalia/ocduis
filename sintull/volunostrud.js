function tree_cover(x, y) {
    // Example tree data: Array of tree objects with coordinates and radius of coverage
    const trees = [
        {x: 10, y: 10, radius: 5},
        {x: 15, y: 15, radius: 3},
        {x: 20, y: 20, radius: 4}
    ];

    let count = 0;

    for (let i = 0; i < trees.length; i++) {
        let tree = trees[i];
        // Calculate the distance from the point (x, y) to the tree center
        let distance = Math.sqrt((x - tree.x) ** 2 + (y - tree.y) ** 2);
        if (distance <= tree.radius) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(tree_cover(12, 10)); // Output: number of trees covering the point (x, y)
