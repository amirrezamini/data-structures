interface AdjacencyList<T extends string | number> {
    [key: string | number]: Array<T>
}

class Graph<T extends string | number> {
    adjacencyList: AdjacencyList<T>

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: T): boolean {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []

            return true
        }

        return false
    }

    addEdge(vertext1: T, vertext2: T): boolean {
        if (this.adjacencyList[vertext1] && this.adjacencyList[vertext2]) {
            if (!this.adjacencyList[vertext1].includes(vertext2)) {
                this.adjacencyList[vertext1].push(vertext2)
                this.adjacencyList[vertext2].push(vertext1)

                return true
            }
        }

        return false
    }

    removeEdge(vertex1: T, vertex2: T): boolean {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertext: T) => vertext !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertext: T) => vertext !== vertex1)

            return true
        }

        return false
    }

    removeVertex(vertex: T): undefined | this {
        if (this.adjacencyList[vertex]) {
            let temp: T

            while (this.adjacencyList[vertex].length) {
                temp = this.adjacencyList[vertex].pop()!

                this.removeEdge(vertex, temp)
            }

            delete this.adjacencyList[vertex]

            return this
        }

        return undefined
    }
}

const graph: Graph<string> = new Graph<string>()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.removeVertex('B')
console.log(graph)