function candies(n, m) {
    const redundantCandy = m%n;
    if(redundantCandy === 0){
      return m;
    }
    else{
      return m - redundantCandy;
    }
  }
  console.log(candies(3, 10));