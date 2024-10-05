function add(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);
  
  function innerAdd(...moreArgs) {
    sum += moreArgs.reduce((acc, val) => acc + val, 0);
    return innerAdd;
  }
  innerAdd.getValue = function () {
    return sum;
  }
  
  return innerAdd;
}

/*
console.log(add(1).getValue());                // 1
console.log(add(1)(2).getValue());             // 3
console.log(add(1)(2)(3).getValue());          // 6
console.log(add(1)(2, 3).getValue());          // 6
console.log(add(1, 2)(3).getValue());          // 6
console.log(add(1, 2, 3).getValue());          // 6
*/