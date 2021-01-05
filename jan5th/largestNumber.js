function largestNumber(n) {
  if (n < 1 || n > 9) {
    alert("Your input can only be in the range of 1 to 9 ");
  } else {
    return Math.pow(10, n) - 1;
  }
}
console.log(largestNumber(6));
