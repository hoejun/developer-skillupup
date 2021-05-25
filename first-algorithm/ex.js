const Triangle = (row, col) => {
  if (col === 0 || col === row) {
    return 1;
  } else if (col < 0 || row < col) {
    return 0;
  } else {
    return Triangle(row - 1, col) + Triangle(row - 1, col - 1);
  }
};

let row = 5;
let col = 1;

const test = Array.from(new Array(row), () => {
  return Array.from(new Array(col++).fill(0));
});

for (let i = 0; i < row; i++) {
  test[i][0] = 1;
  for (let j = 1; j <= i; j++) {
    test[i][j] = Triangle(i, j);
  }
}

console.log(test);
