async function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// example 
/*
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
*/