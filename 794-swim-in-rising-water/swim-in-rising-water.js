/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    const n = grid.length;
    if (n === 0) return 0;
    if (n === 1) return grid[0][0];

    class MinHeap {
        constructor() { this.a = []; }
        size() { return this.a.length; }
        isEmpty() { return this.a.length === 0; }
        push(pair) {
            this.a.push(pair);
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
                if (a[p][0] <= a[i][0]) break;
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
                if (l < len && a[l][0] < a[smallest][0]) smallest = l;
                if (r < len && a[r][0] < a[smallest][0]) smallest = r;
                if (smallest === i) break;
                [a[i], a[smallest]] = [a[smallest], a[i]];
                i = smallest;
            }
        }
    }

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = new Uint8Array(n * n);
    const heap = new MinHeap();

    const startTime = grid[0][0];
    heap.push([startTime, 0]);
    visited[0] = 1;

    while (!heap.isEmpty()) {
        const [t, idx] = heap.pop();
        const r = Math.floor(idx / n);
        const c = idx % n;
        if (r === n - 1 && c === n - 1) return t;

        for (let k = 0; k < 4; k++) {
            const nr = r + dirs[k][0];
            const nc = c + dirs[k][1];
            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
            const nidx = nr * n + nc;
            if (visited[nidx]) continue;
            visited[nidx] = 1;
            const nt = Math.max(t, grid[nr][nc]);
            heap.push([nt, nidx]);
        }
    }
    return -1;
};