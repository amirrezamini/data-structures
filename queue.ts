class QNode<T> {
    value: T
    next: QNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class Queue<T> {
    first: QNode<T> | null
    last: QNode<T> | null
    length: number = 0

    constructor(value: T) {
        const newNode: QNode<T> = new QNode<T>(value)
        this.first = this.last = newNode
        this.length++
    }

    enqueue(value: T): this {
        const newNode: QNode<T> = new QNode<T>(value)

        if (this.length === 0) {
            this.first = this.last = newNode
        } else {
            this.last!.next = newNode
            this.last = newNode
        }

        this.length++

        return this
    }

    dequeue(): QNode<T> | undefined {
        if (this.length === 0) return undefined

        const temp: QNode<T> = this.first!

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