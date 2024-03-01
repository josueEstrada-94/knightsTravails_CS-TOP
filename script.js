function knightMoves(start, end) {
    // Possible moves knights can do.
    let moves = [
        [-2, -1], [-1,-2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1],
    ];
    
    const seen = new Set([start]);
    let queue = [[start]];
    let steps = 0;

    while (queue.length) {
            let current = queue.shift();
            let currentPosition = current[current.length - 1];

            let currentX = currentPosition[0];
            let currentY = currentPosition[1];

            if (currentX === end[0] && currentY === end[1]) {
                return { steps: current.length - 1, edges:current };
            }

            for (const m of moves) {
                let nextX = currentX + m[0];
                let nextY = currentY + m[1];

                if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8 && !seen.has(nextX + ',' + nextY)) {
                    seen.add(nextX + ',' + nextY);
                    let newPath = [...current, [nextX, nextY]]

                    queue.push(newPath)
                }
            }
        

        steps++;
    }

    return null;
};

const result = knightMoves([0, 0], [7, 7]); //[[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]

if (result) {   
    console.log('The number of movements was: ', result.steps);
    console.log('The moves made were: ', result.edges);
} else {
    console.log('The position cannot be reached.');

    
}