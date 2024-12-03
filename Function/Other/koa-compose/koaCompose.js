/**
 * @param {Array} middlewares
 * @return
 */

function compose(middlewares) {
  return function (context) {
    const dispatch = (index) => {
      if (index === middlewares.length) {
        return Promise.resolve();
      }

      const middleware = middlewares[index];
      return Promise.resolve(middleware(context, () => dispatch(index + 1)));
    };

    return dispatch(0);
  };
}

// Example usage
const m1 = async (_, next) => {
  console.log("Middleware 1 start");
  await next(); // Call the next middleware
  console.log("Middleware 1 end");
};

const m2 = async (_, next) => {
  console.log("Middleware 2 start");
  await next(); // Call the next middleware
  console.log("Middleware 2 end");
};

const m3 = async (_, next) => {
  console.log("Middleware 3 start");
  await next(); // Call the next middleware
  console.log("Middleware 3 end");
};

// Compose the middlewares
const composedMiddleware = compose([m1, m2, m3]);

// Simulate Koa's context and call the composed middleware
composedMiddleware({}, () => Promise.resolve()).then(() => {
  console.log("All middlewares executed");
});

// =>
/*
Middleware 1 start
Middleware 2 start
Middleware 3 start
Middleware 3 end
Middleware 2 end
Middleware 1 end
All middlewares executed
 */
