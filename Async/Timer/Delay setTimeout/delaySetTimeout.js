// nested `setTimeout`
setTimeout(() => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
}, 1000);

// `Promise`
new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(() => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
});
