/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights || heights.length === 0) return [];
    const m = heights.length;
    const n = heights[0].length;
    if (m === 0 || n === 0) return [];

    // visited arrays for pacific and atlantic
    const pac = Array.from({ length: m }, () => Array(n).fill(false));
    const atl = Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // BFS helper: start from multiple sources in queue, mark visited
    function bfs(starts, visited) {
        const q = [];
        for (const [r, c] of starts) {
            visited[r][c] = true;
            q.push([r, c]);
        }

        while (q.length) {
            const [r, c] = q.shift(); // typical BFS; for micro-optimizations use head index
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                if (visited[nr][nc]) continue;
                // we can flow from (nr,nc) -> (r,c) if heights[nr][nc] >= heights[r][c]
                // because we are doing reverse BFS from oceans inward
                if (heights[nr][nc] >= heights[r][c]) {
                    visited[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }
    }

    // build starts for pacific (top row & left col) and atlantic (bottom row & right col)
    const pacStarts = [];
    const atlStarts = [];
    for (let r = 0; r < m; r++) {
        pacStarts.push([r, 0]);
        atlStarts.push([r, n - 1]);
    }
    for (let c = 0; c < n; c++) {
        pacStarts.push([0, c]);
        atlStarts.push([m - 1, c]);
    }

    bfs(pacStarts, pac);
    bfs(atlStarts, atl);

    const res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pac[i][j] && atl[i][j]) res.push([i, j]);
        }
    }
    return res;
};