function maxMultiple(divisor, bound) {
  if (divisor < 2 || divisor > 10) {
    alert("divisor must be in the range of 2 to 10");
  }
  if (bound < 5 || divisor > 100) {
    alert("bound must be in the range of 5 to 100");
  }
  if (bound % divisor === 0) {
    return bound;
  } else {
    return bound - (bound % divisor);
  }
}

