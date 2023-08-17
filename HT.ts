interface DataMap {
    [key: string]: number
}

class HT {
    dataMap: Array<any | Array<DataMap>>

    constructor(length: number) {
        this.dataMap = new Array(length)
    }

    protected _hash(key: string) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % this.dataMap.length
    }

    set(key: string, value: number) {
        const index = this._hash(key)

        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }

        this.dataMap[index].push([key, value])
    }

    get(key: string) {
        const index = this._hash(key)

        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            }
        }

        return undefined
    }

    keys() {
        const keysArr: Array<string> = []

        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    keysArr.push(this.dataMap[i][j][0])
                }
            }
        }

        return keysArr
    }
}

const ht = new HT(7)
ht.set('test1', 100)
ht.set('test2', 200)
ht.set('test3', 3000)
console.log(ht.get('test1'));
