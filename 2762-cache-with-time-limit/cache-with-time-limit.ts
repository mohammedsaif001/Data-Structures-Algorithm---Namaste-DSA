class TimeLimitedCache {
    cache = new Map();
    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        const alreadyExists = this.cache.get(key);
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeoutId)
        };
        const timeoutId = setTimeout(() => {
           this.cache.delete(key)
        }, duration)
         this.cache.set(key, { value, timeoutId });
         return Boolean(alreadyExists)
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            return this.cache.get(key).value
        }
        return -1;
    }

    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */