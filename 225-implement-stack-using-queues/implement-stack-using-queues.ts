class MyStack {
    q:number[]
    constructor() {
        this.q = []
    }

    push(x: number): void {
        this.q.push(x)
    }

    pop(): number {
        // Remove elements from top till 2nd last then add to the same queue now the first element will be my poppped element
        for(let i=0;i<this.q.length - 1;i++){
            this.q.push(this.q.shift())
        }

        return this.q.shift()
    }

    top(): number {
         for(let i=0;i<this.q.length - 1;i++){
            this.q.push(this.q.shift())
        }
        let top = this.q.shift();
        this.q.push(top)

        return top
    }

    empty(): boolean {
        return !this.q.length
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