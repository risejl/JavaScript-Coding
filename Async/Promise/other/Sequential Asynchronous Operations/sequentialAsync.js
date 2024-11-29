function asyncOp1(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("async1");
      resolve();
    }, delay);
  });
}

function asyncOp2(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("async2");
      resolve();
    }, delay);
  });
}

async function sequence() {
  try {
    await asyncOp1(2000);
    await asyncOp2(2000);
    console.log("finish");
  } catch (err) {
    console.log(err);
  }
}

sequence();
