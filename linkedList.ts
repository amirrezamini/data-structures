class LLNode<T> {
    value: T
    next: LLNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class LinkedList<T> {
    head: LLNode<T> | null
    tail: LLNode<T> | null
    length: number = 0

    constructor(value: T) {
        const newNode: LLNode<T> = new LLNode<T>(value)
        this.head = newNode
        this.tail = this.head
        this.length++
    }

    push(value: T): this {
        const newNode: LLNode<T> = new LLNode<T>(value)

        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop(): LLNode<T> | undefined {
        if (this.length === 0) return undefined

        let temp: LLNode<T> = this.head!
        let pre: LLNode<T> = this.head!

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null

        this.length--

        return temp
    }

    unshift(value: T): this {
        const newNode = new LLNode<T>(value)

        if (this.length === 0) return this.push(value)

        newNode.next = this.head
        this.head = newNode

        this.length++

        return this
    }

    shift(): LLNode<T> | undefined {
        if (this.length === 0) return undefined

        const temp = this.head

        this.head = this.head!.next

        temp!.next = null

        if (this.length === 1) this.tail = null

        this.length--

        return temp!
    }

    get(index: number): LLNode<T> | undefined {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head

        for (let i = 0; i < index; i++) {
            temp = temp!.next
            i++
        }

        return temp!
    }

    set(index: number, value: T): LLNode<T> | undefined {
        let temp = this.get(index)

        if (temp) {
            temp.value = value
        }

        return temp
    }

    insert(index: number, value: T): this | undefined {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)

        let pre = this.get(index - 1)

        const newNode: LLNode<T> = new LLNode<T>(value)

        if (pre) {
            newNode.next = pre.next
            pre.next = newNode
            this.length++
        }

        return this
    }

    remove(index: number): this | undefined | LLNode<T> {
        if (index < 0 || index >= this.length) return undefined
        
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const pre = this.get(index - 1)
        const temp = this.get(index)

        pre!.next = temp!.next

        this.length--

        return this
    }

    reverse(): this {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp!.next
        let prev: LLNode<T> | null = null

        for (let i = 0; i < this.length; i++) {
            next = temp!.next
            temp!.next = prev
            prev = temp!
            temp!.next
        }

        return this
    }
}

const ll: LinkedList<number> = new LinkedList(1)
ll.push(2)
ll.push(3)
console.log(ll.remove(1));
