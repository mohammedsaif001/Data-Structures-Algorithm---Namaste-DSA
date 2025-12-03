// function orangesRotting(grid: number[][]): number {
//     // 1. Retrive position of all rotten oranges in the queue with 0 minute
//     // 2. Rot corresponding Oranges by increasing the minutes
//     // 3. Check if any orange is fresh a last if es then return -1
//     // 4. Else Return the minutes

//     let rowsLength = grid.length;
//     let colLength = grid[0].length;

//     let queue = []

//     for (let i = 0; i < rowsLength; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (grid[i][j] === 2) {
//                 queue.push([i, j, 0])
//             }
//         }
//     }

//     let minutes = 0;

//     while (queue.length) {
//         let [x, y, min] = queue.shift();

//         let topAdjacent = { x: x - 1, y };
//         let bottomAdajacent = { x: x + 1, y };
//         let leftAdjacent  = { x, y: y - 1 }
//         let rightAdjacent  = { x, y: y + 1 }

//         // For Left
//         if (leftAdjacent.y >= 0 && grid[leftAdjacent.x][leftAdjacent.y] === 1) {
//             grid[leftAdjacent.x][leftAdjacent.y] = 2;
//             queue.push([leftAdjacent.x, leftAdjacent.y, min+1])
//         }
//         // For Right
//         if (rightAdjacent.y < colLength && grid[rightAdjacent.x][rightAdjacent.y] === 1) {
//             grid[rightAdjacent.x][rightAdjacent.y] = 2;
//             queue.push([rightAdjacent.x, rightAdjacent.y, min+1])
//         }
//         // For Top
//         if (topAdjacent.x >= 0 && grid[topAdjacent.x][topAdjacent.y] === 1) {
//             grid[topAdjacent.x][topAdjacent.y] = 2;
//             queue.push([topAdjacent.x, topAdjacent.y, min+1])
//         }
//         // For Bottom
//         if (bottomAdajacent.x < rowsLength && grid[bottomAdajacent.x][bottomAdajacent.y] === 1) {
//             grid[bottomAdajacent.x][bottomAdajacent.y] = 2;
//             queue.push([bottomAdajacent.x, bottomAdajacent.y, min+1])
//         }

//         minutes = Math.max(minutes,min)
//     }


//     for (let i = 0; i < rowsLength; i++) {
//         for (let j = 0; j < colLength; j++) {
//             if (grid[i][j] === 1) {
//                 return -1;
//             }
//         }
//     }

//     return minutes
// };

function orangesRotting(grid: number[][]): number {
        // 1. Retrive position of all rotten oranges in the queue with 0 minute
    // 2. Rot corresponding Oranges by increasing the minutes
    // 3. Check if any orange is fresh a last if es then return -1
    // 4. Else Return the minutes
    
    const rows = grid.length;
    const cols = grid[0].length;

    const queue: [number, number, number][] = [];

    // push all initially rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]);
            }
        }
    }

    let minutes = 0;

    // 4 possible movement directions
    const directions = [
        [-1, 0],  // top
        [1, 0],   // bottom
        [0, -1],  // left
        [0, 1]    // right
    ];

    while (queue.length) {
        const [x, y, time] = queue.shift()!;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // valid fresh orange?
            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols &&
                grid[nx][ny] === 1
            ) {
                grid[nx][ny] = 2;
                queue.push([nx, ny, time + 1]);
                minutes = Math.max(minutes, time + 1);
            }
        }
    }

    // check if any fresh orange remains
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) return -1;
        }
    }

    return minutes;
}
