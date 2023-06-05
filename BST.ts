class BSTNode {
    value: number
    right: BSTNode | null
    left: BSTNode | null

    constructor(value: number) {
        this.value = value
        this.right = this.left = null
    }
}

class BST {
    root: BSTNode | null

    constructor() {
        this.root = null
    }

    insert(value: number) {
        const newNode: BSTNode = new BSTNode(value)

        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            } else {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }
        }
    }

    contains(value: number): boolean {
        let temp = this.root

        while (temp) {
            if (value > temp.value) {
                temp = temp.right
            } else if (value < temp.value) {
                temp = temp.left
            } else {
                return true
            }
        }

        return false
    }

    min(node: BSTNode | null): BSTNode | undefined {
        if (node) {
            while (node.left) {
                node = node.left
            }
    
            return node
        }
    }
}

const bst: BST = new BST()
bst.insert(23)
bst.insert(14)
bst.insert(67)
bst.insert(34)
bst.insert(37)
console.log(bst)