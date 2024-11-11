const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS
  const dfs = (r, c) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }
      
      grid[r][c] = 'W';
      
      dfs(r + 1, c); 
      dfs(r - 1, c); 
      dfs(r, c + 1); 
      dfs(r, c - 1); 
  };

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              dfs(r, c);
              islandCount += 1;
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
