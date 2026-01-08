interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function () {
    const last = this[this.length - 1]
    return last !== undefined ? last : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
