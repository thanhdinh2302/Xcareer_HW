function seatsInTheater(nCols, nRows, col, row) {
  const peopleBehindInColumn = nCols - col + 1; //+1 represents for the column behind me
  const peoplebehindInRow = nRows - row;
  return peopleBehindInColumn * peoplebehindInRow;
}
console.log(seatsInTheater(16, 11, 5, 3));
