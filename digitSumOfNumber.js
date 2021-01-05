function addTwoDigits(n) {
  preSum = 0;
  sum = 0;
  var str = n.toString();
  if (str.length == 2 && Math.floor(n / 10 != 0)) {
    preSum += Math.floor(n / 10);
    sum += preSum + n - preSum * 10;
    n = Math.floor(n / 10);
  } else {
    alert("you must enter a number of 2 digits without beginning with 0");
  }
  return sum;
}
