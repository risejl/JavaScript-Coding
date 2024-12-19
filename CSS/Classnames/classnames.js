/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function classNames(...args) {
  const classes = [];

  const classNamesImpl = (classesArr, ...args) => {
    args.forEach((arg) => {
      if (!arg) {
        return;
      }

      const argType = typeof arg;

      if (argType === "string" || argType === "number") {
        classesArr.push(String(arg));
        return;
      }

      if (Array.isArray(arg)) {
        for (const cls of arg) {
          classNamesImpl(classesArr, cls);
        }
        return;
      }

      if (argType === "object") {
        const objArg = arg;
        for (const key in objArg) {
          if (Object.hasOwn(objArg, key) && objArg[key]) {
            classesArr.push(key);
          }
        }

        return;
      }
    });
  }

  classNamesImpl(classes, ...args);

  return classes.join(" ");
}