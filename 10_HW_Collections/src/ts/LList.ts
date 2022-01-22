import {IList} from "./types";

class Node {
    value: number
    next: Node

    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next;
    }
}

class LList implements IList {

    private root: null | Node;
    private tail: null | Node;
    private size: number;

    constructor(item?:number[] | number) {
        this.root = null;
        this.tail = null;
        this.size = 0;
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                this.add(item[i])
            }
        } else {
            for (let i = 0; i < item; i++) {
                this.add(undefined)
            }
        }
    }

    add(value): void {
        const node = new Node(value, null)

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.root) {
            this.root = node;
        }

        this.tail = node;
        this.size++
    }

    clear(): void {
        this.root = null;
        this.tail = null;
    }

    contains(value): boolean {
        let current = this.root;
        let index = 0;

        while(index <= this.size) {
            if (current.value === value) {
                return true;
            }

            if (current.value !== value) {
                if (current.next !== null) {
                    current = current.next;
                } else {
                    return false;
                }
            }
            index++
        }
    }

    get(index): number {
        let counter = 0;
        let current = this.root

        if (index < 0) {
            return -1
        }

        if (index >= this.size) {
            return -1
        }

        while(counter <= this.size) {
            if (counter === index) {
                return current.value
            }
            current = current.next
            counter++

        }
    }

    getSize(): number {
        let counter = 0;
        let current = this.root;

        while(current) {
            counter++
            current = current.next
        }
        return counter;
    }

    halfReverse(): void {
        let arr = this.toArray()

        if (arr.length < 1) {
            return
        }

        const half = Number((arr.length / 2).toFixed(0));
        let res = []
        for (let i = half - 1; i < this.size; i++) {
            res[res.length] = arr[i]
        }
        for (let i = 0; i < half - 1; i++) {
            res[res.length] = arr[i]
        }
        this.clear()

        for (let i = 0; i < res.length; i++) {
            this.add(res[i])
        }
    }

    maxIndex(): number {
        let maxValue = this.root.value
        let current = this.root
        let counter = 0;
        let index = 0;

        while(current) {
            if (maxValue < current.value) {
                maxValue = current.value
                index = counter;
            }
            counter++
            current = current.next
        }
        return index
    }

    maxValue(): number {
        let maxValue = this.root.value
        let current = this.root;

        while(current) {
            if (maxValue < current.value) {
                maxValue = current.value
            }
            current = current.next
        }
        return maxValue
    }

    minIndex(): number {
        let minValue = this.root.value
        let current = this.root
        let counter = 0;
        let index = 0;

        while(current) {
            if (minValue > current.value) {
                minValue = current.value
                index = counter;
            }
            counter++
            current = current.next
        }
        return index
    }

    minValue(): number {
        let minValue = this.root.value
        let current = this.root

        while(current) {
            if (minValue > current.value) {
                minValue = current.value
            }
            current = current.next
        }
        return minValue
    }

    print(): void {
        let current = this.root;

        while(current) {
            console.log(current.value)
            current = current.next
        }

    }

    remove(value): number {
        let counter = 0;
        let current = this.root;
        let prev = null;

        while(counter < this.size) {

            if (current.value === value) {
                const result = current.value

                if (current.next !== null) {
                    current.value = current.next.value
                    current.next = current.next.next
                } else {

                    if (prev !== null) {
                        prev.next = null
                        this.tail = prev
                    } else {
                        this.root = null;
                        this.tail = null;
                    }
                }
                this.size--
                if (this.size === 1) {
                    this.tail = null;
                }
                return result
            } else {
                counter++
                prev = current;
                current = current.next
            }
        }

    }

    removeAll(array): void {
        let current = this.root;
        let prev = null;

        while(current) {

            if (array.includes(current.value)) {
                if (current.next !== null) {
                    current.value = current.next.value;
                    current.next = current.next.next
                } else {
                    if (prev === null) {
                        this.root = null;
                        this.tail = null;
                        current = null;
                    }

                    if (prev !== null) {
                        prev.next = null
                        current = prev
                    }
                }
            } else {
                prev = current
                current = current.next
            }
        }
        this.size = this.getSize()

        if (this.size === 1) {
            this.tail = null;
        }
    }

    retainAll(array): void {
        let current = this.root;
        let prev = null;

        while(current) {

            if (!array.includes(current.value)) {
                if (current.next !== null) {
                    current.value = current.next.value;
                    current.next = current.next.next
                } else {
                    if (prev === null) {
                        this.root = null;
                        this.tail = null;
                        current = null;
                    }

                    if (prev !== null) {
                        prev.next = null
                        current = prev
                    }
                }
            } else {
                prev = current
                current = current.next
            }
        }
        this.size = this.getSize()

        if (this.size === 1) {
            this.tail = null;
        }
    }

    reverse(): void {
        let arr = this.toArray()

        if (arr.length < 1) {
            return
        }

        this.clear()
        let result = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            result[arr.length - 1 - i] = arr[i];
        }
        for (let i = 0; i < result.length; i++) {
            this.add(result[i])
        }
    }

    set(value, index): void {
        let current = this.root;
        let counter = 0;

        while(counter < this.size) {
            if (counter === index) {
                current.value = value;
            }

            current = current.next;
            counter++;
        }
    }

    sort(): void {

        let arr: number[] = doSort(this.toArray())
        function doSort (arr): number[] {

            if (arr.length <= 1) {
                return arr
            }

            let pivot = arr[0];
            let left = [];
            let right = [];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left[left.length] = arr[i]
                } else {
                    right[right.length] = arr[i]
                }
            }
            return doSort(left).concat(pivot, doSort(right));
        }
        this.clear()

        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i])
        }

    }

    toArray(): number[] {
        const result = []
        let current = this.root
        while(current) {
            result[result.length] = current.value
            current = current.next
        }
        return result
    }

    toString(): string {
        let result = ''
        let current = this.root
        while(current) {
            result = result + '' + current.value
            current = current.next
        }
        return result
    }
}

const test1 = new LList([1])
console.log(test1.toArray())
test1.reverse()
console.log(test1.toArray())

module.exports = {LList}
