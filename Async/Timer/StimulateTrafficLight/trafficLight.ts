function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function changeLightColor(
  duration: number,
  color: string
): Promise<void> {
  const lightElement = document.getElementById('light');

  if (lightElement) {
    lightElement.style.background = color;
    console.log('color', color);
    await sleep(duration);
  } else {
    console.error('Element with id "light" not found.');    
  }
}

async function act(): Promise<void> {
  while (true) {
    await changeLightColor(30000, 'green');
    await changeLightColor(3000, 'yellow');
    await changeLightColor(20000, 'red');
  }
}

act();