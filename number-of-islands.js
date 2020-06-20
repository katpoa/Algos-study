// leetcode 
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

let numIslands = function(grid) {
    let count = 0;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                aux(grid, i, j);
                count += 1;
            }
        }
    }
    return count;
}

let aux = function(grid, i, j) {
    // if current is an island - surrounding are all 0, then add to island count
    // if grid[i + 1] == 0 and grid[i - 1] == 0 and grid[i][j + 1] == 0 and grid[i][j - 1] == 0:
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') {
        return;
    }
    // else recursively check again for surrounding units
    grid[i][j] = '!';
    aux(grid, i + 1, j);
    aux(grid, i - 1, j);
    aux(grid, i, j + 1);
    aux(grid, i, j - 1);
}
