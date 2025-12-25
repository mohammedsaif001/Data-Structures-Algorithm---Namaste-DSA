type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    const initialVaue = init;

    return {
        increment: () => ++init,
        reset: () => {
            init = initialVaue;
            return init
        },
        decrement: () => --init
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */