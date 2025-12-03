function orangesRotting(grid: number[][]): number {
    // 1. Retrive position of all rotten oranges in the queue with 0 minute
    // 2. Rot corresponding Oranges by increasing the minutes
    // 3. Check if any orange is fresh a last if es then return -1
    // 4. Else Return the minutes

    let rowsLength = grid.length;
    let colLength = grid[0].length;

    let queue = []

    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0])
            }
        }
    }

    let minutes = 0;

    while (queue.length) {
        let [x, y, min] = queue.shift();

        let topAdjacent = { x: x - 1, y };
        let bottomAdajacent = { x: x + 1, y };
        let leftAdjacent  = { x, y: y - 1 }
        let rightAdjacent  = { x, y: y + 1 }

        // For Left
        if (leftAdjacent.y >= 0 && grid[leftAdjacent.x][leftAdjacent.y] === 1) {
            grid[leftAdjacent.x][leftAdjacent.y] = 2;
            queue.push([leftAdjacent.x, leftAdjacent.y, min+1])
        }
        // For Right
        if (rightAdjacent.y < colLength && grid[rightAdjacent.x][rightAdjacent.y] === 1) {
            grid[rightAdjacent.x][rightAdjacent.y] = 2;
            queue.push([rightAdjacent.x, rightAdjacent.y, min+1])
        }
        // For Top
        if (topAdjacent.x >= 0 && grid[topAdjacent.x][topAdjacent.y] === 1) {
            grid[topAdjacent.x][topAdjacent.y] = 2;
            queue.push([topAdjacent.x, topAdjacent.y, min+1])
        }
        // For Bottom
        if (bottomAdajacent.x < rowsLength && grid[bottomAdajacent.x][bottomAdajacent.y] === 1) {
            grid[bottomAdajacent.x][bottomAdajacent.y] = 2;
            queue.push([bottomAdajacent.x, bottomAdajacent.y, min+1])
        }

        minutes = Math.max(minutes,min)
    }


    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return minutes
};