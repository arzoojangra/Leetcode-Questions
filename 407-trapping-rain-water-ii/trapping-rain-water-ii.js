/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    const m = heightMap.length,
        n = heightMap[0].length;
    if (m < 3 || n < 3) return 0;

    class MinHeap {
        constructor() { this.a = []; }
        size() { return this.a.length; }
        isEmpty() { return this.a.length === 0; }
        push(item) {
            this.a.push(item);
            this._siftUp(this.a.length - 1);
        }
        pop() {
            if (this.a.length === 0) return null;
            const top = this.a[0];
            const last = this.a.pop();
            if (this.a.length > 0) {
                this.a[0] = last;
                this._siftDown(0);
            }
            return top;
        }
        _siftUp(i) {
            const a = this.a;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (a[p].height <= a[i].height) break;
                [a[p], a[i]] = [a[i], a[p]];
                i = p;
            }
        }
        _siftDown(i) {
            const a = this.a;
            const len = a.length;
            while (true) {
                let smallest = i;
                const l = (i << 1) + 1;
                const r = l + 1;
                if (l < len && a[l].height < a[smallest].height) smallest = l;
                if (r < len && a[r].height < a[smallest].height) smallest = r;
                if (smallest === i) break;
                [a[i], a[smallest]] = [a[smallest], a[i]];
                i = smallest;
            }
        }
    }

    const pq = new MinHeap();
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // push all border cells
    for (let i = 0; i < m; i++) {
        pq.push({ height: heightMap[i][0], x: i, y: 0 });
        pq.push({ height: heightMap[i][n - 1], x: i, y: n - 1 });
        visited[i][0] = true;
        visited[i][n - 1] = true;
    }
    for (let j = 1; j < n - 1; j++) { // j from 1..n-2 to avoid pushing corners twice, optional
        pq.push({ height: heightMap[0][j], x: 0, y: j });
        pq.push({ height: heightMap[m - 1][j], x: m - 1, y: j });
        visited[0][j] = true;
        visited[m - 1][j] = true;
    }

    let result = 0;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    while (!pq.isEmpty()) {
        const { height, x, y } = pq.pop();

        for (const [dx, dy] of directions) {
            const nx = x + dx,
                ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                const nh = heightMap[nx][ny];
                if (nh < height) {
                    result += height - nh;
                    pq.push({ height: height, x: nx, y: ny }); // boundary remains 'height'
                } else {
                    pq.push({ height: nh, x: nx, y: ny });
                }
            }
        }
    }

    return result;
};