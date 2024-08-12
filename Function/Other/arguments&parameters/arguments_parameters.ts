type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return arguments.length;
};

function functionLength(fn: Function): number {
  return fn.length;
}

// example
/*
console.log(argumentsLength(1, 2, 3)); // 3
console.log(functionLength((a, b) => a + b)); // 2
*/