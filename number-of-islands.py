

class Solution(object):
    def numIslands(self, grid):
        def sink(i, j):
            if 0 <= i < len(grid) and 0 <= j < len(grid[i]) and grid[i][j] == '1':
                grid[i][j] = '0'
                map(sink, (i+1, i-1, i, i), (j, j, j+1, j-1))
                return 1
            return 0
        return sum(sink(i, j) for i in range(len(grid)) for j in range(len(grid[i])))

#     def numIslands(self, grid):
#         """
#         :type grid: List[List[str]]
#         :rtype: int
#         """
#         count = 0;
#         for i in range(len(grid)):
#             for j in range(len(grid[0])):
#                 if grid[i][j] == '1':
#                     self.aux(grid, i, j)
#                     count += 1
#         return count
    
#     def aux(self, grid, i, j):
#         # if current is an island - surrounding are all 0, then add to island count
#         # if grid[i + 1] == 0 and grid[i - 1] == 0 and grid[i][j + 1] == 0 and grid[i][j - 1] == 0:
#         if i < 0 or j < 0 or i > range(len(grid)) or j > range(len(grid[0])) or grid[i][j] != '1':
#             return
#         # else recursively check again for surrounding units
#         grid[i][j] = '!'
#         self.aux(grid, i + 1, j)
#         self.aux(grid, i - 1, j)
#         self.aux(grid, i, j + 1)
#         self.aux(grid, i, j - 1)
                           
