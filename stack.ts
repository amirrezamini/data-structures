class ListNode<T> {
    value: T
    next: ListNode<T> | null
    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class Stack<T> {
    top: ListNode<T> | null
    length: number = 0

    constructor(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value)
        this.top = newNode
        this.length++
    }

    push(value: T): this {
        const newNode: ListNode<T> = new ListNode<T>(value)

        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++

        return this
    }

    pop(): undefined | ListNode<T> {
        if (this.length === 0) return undefined

        const temp: ListNode<T> = this.top!

        if (this.length === 1) {
            this.top = null
        } else {
            this.top = this.top!.next
        }

        temp.next = null

        this.length--

        return temp
    }
}

const stack = new Stack(0)
console.log(stack.push(1))