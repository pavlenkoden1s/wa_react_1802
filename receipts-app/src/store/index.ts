export * from './Auth';
export * from './Images';
export * from './OrderLine';


// High ordered function
function logger<T>(f: (a: T) => T) {
  const phrase = 'Result';
  return (n: T): T => {
    const result = f(n);
    console.log(`${phrase} ${result}`);
    return result;
  };
}

const pow = (a: number) => {
  return a * a
};

const loggeredPow = logger<number>(pow);
loggeredPow(2);
