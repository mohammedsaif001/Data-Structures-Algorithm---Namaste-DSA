class MyStack {
    queue: number[]
    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        if (this.queue.length <= 0) return -1;

        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift())
        }

        return this.queue.shift();

    }

    top(): number {
         if (this.queue.length <= 0) return -1;

        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift())
        }

        let top = this.queue.shift()
        this.queue.push(top)

        return top
    }

    empty(): boolean {
        return !this.queue.length 
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */