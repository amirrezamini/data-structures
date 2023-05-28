class ListNode<T> {
    value: T
    next: ListNode<T> | null
    prev: ListNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = this.prev = null
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null
    tail: ListNode<T> | null
    length: number = 0

    constructor(value: T) {
        const newNode: ListNode<T> = new ListNode<T>(value)
        this.head = this.tail = newNode
        this.length++
    }

    push(value: T): this {
        const newNode: ListNode<T> = new ListNode<T>(value)

        if (this.length === 0) {
            this.head = this.tail = newNode
        } else {
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop(): ListNode<T> | undefined {
        if (this.length === 0) return undefined

        const temp: ListNode<T> = this.tail!
        
        if (this.length === 1) {
            this.head = this.tail = null
        } else {
            this.tail = this.tail!.prev
            this.tail!.next = null
        }
        
        this.length--
        
        temp!.next = temp!.prev = null

        return temp
    }

    unshift(value: T): ListNode<T> | this {
        if (this.length === 0) return this.push(value)

        const newNode: ListNode<T> = new ListNode<T>(value)

        newNode.next = this.head
        this.head!.prev = newNode
        this.head = newNode

        this.length++

        return this;
    }

    shift(): ListNode<T> | undefined {
        if (this.length === 0) return undefined
        if (this.length === 1) return this.pop()

        const temp: ListNode<T> = this.head!

        this.head = this.head!.next
        this.head!.prev = null

        temp.next = null
        temp.prev = null

        this.length--

        return temp
    }

    get(index: number): ListNode<T> | undefined {
        if (index < 0 || index >= this.length) return undefined

        let temp: ListNode<T> = this.head!

        if (index < this.length / 2) {
            for (let i: number = 0; i < this.length; i++) {
                temp = temp.next!
                i++
            }
        } else {
            temp = this.tail!

            for (let i: number = this.length - 1; i > length; i--) {
                temp = temp.prev!
                i++
            }
        }

        return temp
    }

    set(index: number, value: T): this | undefined {
        const temp = this.get(index)

        if (temp) {
            temp.value = value
        }

        return this
    }

    insert(index: number, value: T) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        
        const newNode: ListNode<T> = new ListNode<T>(value)

        const before = this.get(index - 1)
        const after = before!.next

        if (before) {
            newNode.prev = before
            newNode.next = after
            before.next = newNode
            after!.prev = newNode
        }
        
        this.length++

        return this
    }

    remove(index: number) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const temp = this.get(index)

        if (temp) {
            temp.prev!.next = temp.next
            temp.next!.prev = temp.prev
            temp.next = temp.prev = null
        }

        this.length--

        return temp
    }
}

const dll = new DoublyLinkedList<number>(0)
dll.push(1)
dll.push(2)
dll.push(3)
console.log(dll.get(2))
