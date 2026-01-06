type Fn<T> = () => Promise<T>

async function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
     return Promise.all(functions.map(fn => fn()));
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */