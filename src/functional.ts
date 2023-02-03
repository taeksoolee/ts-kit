type Func<T> = (...args: T[]) => T;

export function pipe<T>(...callbacks: Func<T>[]): (base: T) => T {
  return base => {
    return callbacks.reduce((prev, callback) => {
      return callback(prev, base);
    }, base);
  }
}

pipe<string>(
  (_str, base) => base + base,
  (str, base) => str + base,
  (str) => str + '!',
)('abc');