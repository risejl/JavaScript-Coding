class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callbackFn) => callbackFn(this.value));
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callbackFn) => callbackFn(this.reason));
      }
    }

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  handlePromiseResult(result, resolve, reject) {
    if (result instanceof MyPromise) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function'
      ? onFulfilled
      : (value) => value;
    onRejected = typeof onRejected === 'function'
      ? onRejected
      : (reason) => { throw reason; };

    return new MyPromise((resolve, reject) => {
      const fulfilledHandler = () => {
        queueMicrotask(() => {
          try {
            const result = onFulfilled(this.value);
            this.handlePromiseResult(result, resolve, reject);
          } catch (err) {
            reject(err);
          } 
        });
      }

      const rejectedHandler = () => {
        queueMicrotask(() => {
          try {
            const result = onRejected(this.reason);
            this.handlePromiseResult(result, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.state === 'fulfilled') {
        fulfilledHandler();
      } else if (this.state === 'rejected') {
        rejectedHandler();
      } else {
        this.onFulfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    if (typeof onFinally !== 'function') {
      return this.then();
    }

    return this.then(
      (value) => MyPromise.resolve(onFinally()).then(() => value),
      (reason) => MyPromise.resolve(onFinally()).then(() => { throw reason; })
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}