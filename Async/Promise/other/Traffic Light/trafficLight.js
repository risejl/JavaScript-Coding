function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

function trafficLight(delay, color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (color === 'red') {
        red();
      } else if (color === 'green') {
        green();
      } else {
        yellow();
      }
      resolve();
    }, delay);
  });
}


/*
async function trafficRunner() {
  await trafficLight(3000, 'red');
  await trafficLight(3000, 'green');
  await trafficLight(3000, 'yellow');
  trafficRunner();
}
*/