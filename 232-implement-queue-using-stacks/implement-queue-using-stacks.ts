class MyQueue {
    s1: number[];
    s2: number[];
    constructor() {
        this.s1 = [];
        this.s2 = []
    }

    push(x: number): void {
        this.s1.push(x);
    }

    pop(): number {
        // If s2 is empty, move all elements from s1 to s2
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop()!);
            }
        }
        return this.s2.pop()!;
    }

    peek(): number {
        // Same logic as pop but without removing
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop()!);
            }
        }
        return this.s2[this.s2.length - 1];
    }
    empty(): boolean {
        return this.s1.length === 0 && this.s2.length === 0;
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