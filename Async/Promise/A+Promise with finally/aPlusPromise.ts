class MyPromise<T> {
  private state: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  private value: T | undefined;
  private reason: any;
  private onFulfilledCallbacks: ((value: T) => void)[] = [];
  private onRejectedCallbacks: ((reason: any) => void)[] = [];

  constructor(executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void) {
    const resolve = (value: T) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(cb => cb(value));
      }
    };

    const reject = (reason?: any) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then<U>(onFulfilled?: (value: T) => U | MyPromise<U>, onRejected?: (reason: any) => U | MyPromise<U>): MyPromise<U> {
    return new MyPromise<U>((resolve, reject) => {
      const fulfillmentCallback = (value: T) => {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(value as unknown as U);
          } else {
            const result = onFulfilled(value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          }
        } catch (err) {
          reject(err);
        }
      };

      const rejectionCallback = (reason: any) => {
        try {
          if (typeof onRejected !== 'function') {
            reject(reason);
          } else {
            const result = onRejected(reason);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(fulfillmentCallback);
        this.onRejectedCallbacks.push(rejectionCallback);
      } else if (this.state === 'fulfilled') {
        fulfillmentCallback(this.value!);
      } else {
        rejectionCallback(this.reason);
      }
    });
  }

  catch<U>(onRejected: (reason: any) => U | MyPromise<U>): MyPromise<U> {
    return this.then(null, onRejected);
  }

  finally(onFinally?: () => void): MyPromise<T> {
    return this.then(
      (value) => {
        if (onFinally) onFinally();
        return value; // Return the original value
      },
      (reason) => {
        if (onFinally) onFinally();
        throw reason; // Re-throw the original reason
      }
    );
  }
}

/*
// example
function runTests() {
  // Test 1: Basic resolve
  const promise1 = new Promise((resolve) => {
    resolve('Success');
  });

  promise1.then((value) => {
    console.assert(value === 'Success', 'Test 1 Failed');
  });

  // Test 2: Basic reject
  const promise2 = new Promise((_, reject) => {
    reject('Error');
  });

  promise2.catch((reason) => {
    console.assert(reason === 'Error', 'Test 2 Failed');
  });

  // Test 3: Chaining promises
  const promise3 = new Promise((resolve) => {
    resolve('First');
  });

  promise3
    .then((value) => {
      console.assert(value === 'First', 'Test 3.1 Failed');
      return 'Second';
    })
    .then((value) => {
      console.assert(value === 'Second', 'Test 3.2 Failed');
    });

  // Test 4: Chaining with rejection
  const promise4 = new Promise((resolve) => {
    resolve('Initial');
  });

  promise4
    .then((value) => {
      console.assert(value === 'Initial', 'Test 4.1 Failed');
      throw 'Error in chain';
    })
    .catch((reason) => {
      console.assert(reason === 'Error in chain', 'Test 4.2 Failed');
    });

  // Test 5: Handling errors in the executor
  const promise5 = new Promise((_, reject) => {
    throw 'Error in executor';
  });

  promise5.catch((reason) => {
    console.assert(reason === 'Error in executor', 'Test 5 Failed');
  });

  // Test 6: Handling errors in onFulfilled
  const promise6 = new Promise((resolve) => {
    resolve('Value');
  });

  promise6
    .then((value) => {
      console.assert(value === 'Value', 'Test 6.1 Failed');
      throw 'Error in onFulfilled';
    })
    .catch((reason) => {
      console.assert(reason === 'Error in onFulfilled', 'Test 6.2 Failed');
    });

  // Test 7: Handling errors in onRejected
  const promise7 = new Promise((_, reject) => {
    reject('Initial Error');
  });

  promise7
    .catch((reason) => {
      console.assert(reason === 'Initial Error', 'Test 7.1 Failed');
      throw 'Error in onRejected';
    })
    .catch((reason) => {
      console.assert(reason === 'Error in onRejected', 'Test 7.2 Failed');
    });

  // Test 8: Multiple then calls
  const promise8 = new Promise((resolve) => {
    resolve('Value');
  });

  promise8
    .then((value) => {
      console.assert(value === 'Value', 'Test 8.1 Failed');
      return 'New Value';
    })
    .then((value) => {
      console.assert(value === 'New Value', 'Test 8.2 Failed');
    });

  // Test 9: Resolving with another promise
  const promise9 = new Promise((resolve) => {
    resolve(new Promise((res) => res('Resolved with another promise')));
  });

  promise9.then((value) => {
    console.assert(value === 'Resolved with another promise', 'Test 9 Failed');
  });

  // Test 10: Chaining promises with different types
  const promise10 = new Promise((resolve) => {
    resolve(42);
  });

  promise10
    .then((value) => {
      console.assert(value === 42, 'Test 10.1 Failed');
      return { message: 'Object' };
    })
    .then((value) => {
      console.assert(value.message === 'Object', 'Test 10.2 Failed');
    });

    // Test 11: finally() method
  const promise11 = new Promise((resolve) => {
    resolve('Value');
  });

  let finallyExecuted = false;

  promise11
    .then((value) => {
      console.assert(value === 'Value', 'Test 11.1 Failed');
      return 'New Value';
    })
    .finally(() => {
      finallyExecuted = true;
    })
    .then((value) => {
      console.assert(value === 'New Value', 'Test 11.2 Failed');
      console.assert(finallyExecuted, 'Test 11.3 Failed');
    });

  console.log('All tests completed');
}

runTests();
*/