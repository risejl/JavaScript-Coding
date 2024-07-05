const shuffle = function<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    [arr[randIdx], arr[i]] = [arr[i], arr[randIdx]];
  }
  
  return arr;
};
