function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

const colorActions = {
  red,
  green,
  yellow,
}

function trafficLight(delay, color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (colorActions[color]) {
        colorActions[color]();
      } else {
        console.warn(`Unknown color: ${color}`);
      }
      resolve();
    }, delay);
  });
}

// Usage example
async function trafficRunner() {
  const trafficSequence = [
    { delay: 1000, color: 'red' },
    { delay: 2000, color: 'green' },
    { delay: 3000, color: 'yellow' },
  ]

  while (true) {
    for (const { delay, color } of trafficSequence) {
      await trafficLight(delay, color);
    }
  }
}

trafficRunner();