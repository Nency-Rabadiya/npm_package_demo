function diagonalsSort(a: number[][]): number[][] {
  const n: number = a.length;

  function processDiagonal(row: number, col: number) {
    const diagonal: Array<number> = [];
    while (row < n && col >= 0) {
      diagonal.push(a[row][col]);
      row++;
      col--;
    }
    diagonal.sort((x: number, y: number) => x - y);
    while (row > 0 && col < n - 1) {
      row--;
      col++;
      a[row][col] = diagonal.shift();
    }
  }

  for (let i: number = n - 1; i >= 0; i--) {
    processDiagonal(i, n - 1);
    if (i > 0) {
      processDiagonal(0, i - 1);
    }
  }
  return a;
}

const a1: number[][] = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

const result1: number[][] = diagonalsSort(a1);
console.log(result1);
