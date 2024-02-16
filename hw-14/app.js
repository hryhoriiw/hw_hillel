function createSumFunction() {
    let sum = 0;
  
    return function(value) {
        return sum += value;
    };
  }
  
  const sum = createSumFunction();
  
  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));