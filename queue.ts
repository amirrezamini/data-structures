class ListNode<T> {
    value: T
    next: ListNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class Queue<T> {
    first: ListNode<T> | null
    last: ListNode<T> | null
    length: number = 0

    constructor(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value)
        this.first = this.last = newNode
        this.length++
    }

    enqueue(value: T): this {
        const newNode: ListNode<T> = new ListNode<T>(value)

        if (this.length === 0) {
            this.first = this.last = newNode
        } else {
            this.last!.next = newNode
            this.last = newNode
        }

        this.length++

        return this
    }

    dequeue(): ListNode<T> | undefined {
        if (this.length === 0) return undefined

        const temp: ListNode<T> = this.first!

        if (this.length === 1) {
            this.first = this.last = null
        } else {
            this.first = this.first!.next
            temp.next = null
        }

        this.length--

        return temp
    }
}

const q: Queue<number> = new Queue<number>(0)
q.enqueue(1)
console.log(q.enqueue(2))