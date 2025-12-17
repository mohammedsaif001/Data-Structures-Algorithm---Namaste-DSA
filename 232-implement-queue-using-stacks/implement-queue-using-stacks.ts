class MyQueue {
    stack1: number[];
    stack2: number[];
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x: number): void {
        this.stack1.push(x)
    }

    pop(): number {
        if (this.stack1.length === 0 && this.stack2.length === 0) return -1;

        if (this.stack2.length) {
            return this.stack2.pop()
        }

        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop())
        }

        return this.stack1.pop();
    }

    peek(): number {
        if (this.stack1.length === 0 && this.stack2.length === 0) return -1;

        if (this.stack2.length) {
            return this.stack2[this.stack2.length - 1]
        }

        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop())
        }

        let peek = this.stack1.pop()

        this.stack2.push(peek);

        return peek;

    }

    empty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */