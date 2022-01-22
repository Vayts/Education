import {IList} from "./types";

export class AList implements IList {
    private array: number[];
    private size: number;


    constructor(arr) {
        this.array = arr;
        this.size = this.array.length;
    }

    add(value): void {
        this.array[this.size] = value;

        this.size = this.array.length
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0;
    }

    contains(value): boolean {

        for (let i = 0; i < this.size; i++) {
            if (this.array[i] === value) {
                return true
            }
        }
        return false

    }

    get(index): number {
        return this.array[index]
    }

    getSize(): number {
        return this.size;
    }

    halfReverse(): void {
        const half = Number((this.size / 2).toFixed(0));
        let res = []
        for (let i = half - 1; i < this.size; i++) {
            res[res.length] = this.array[i]
        }
        for (let i = 0; i < half - 1; i++) {
            res[res.length] = this.array[i]
        }
        this.array = res;
    }

    maxValue(): number {
        let currentMaxElem = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] > currentMaxElem) {
                currentMaxElem = this.array[i];
            }
        }
        return currentMaxElem;
    }

    minValue(): number {
        let currentMinElem = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] < currentMinElem) {
                currentMinElem = this.array[i];
            }
        }
        return currentMinElem;
    }

    maxIndex(): number {
        let currentMaxElem = this.array[0];
        let currentIndex = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] > currentMaxElem) {
                currentMaxElem = this.array[i];
                currentIndex = i;
            }
        }
        return currentIndex;
    }

    minIndex(): number {
        let currentMinElem = this.array[0];
        let currentIndex = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] < currentMinElem) {
                currentMinElem = this.array[i];
                currentIndex = i;
            }
        }
        return currentIndex;
    }

    print(): void {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i])
        }
    }

    removeAll(array): void {
        let newArr = []
        for (let i = 0; i < this.size; i++) {
            let isMatch = false;
            for (let m = 0; m < array.length; m++) {

                if (this.array[i] === array[m]) {
                    isMatch = true;
                }

            }

            if (isMatch === false) {
                newArr[newArr.length] = this.array[i]
            }
        }
        this.array = newArr
        this.size = this.array.length
    }

    retainAll(array): void {
        let newArr = []
        for (let i = 0; i < this.size; i++) {
            let isMatch = false;
            for (let m = 0; m < array.length; m++) {

                if (this.array[i] === array[m]) {
                    isMatch = true;
                }

            }

            if (isMatch === true) {
                newArr[newArr.length] = this.array[i]
            }
        }
        this.array = newArr
        this.size = this.array.length
    }

    reverse(): void {
        let result = [];
        for (let i = this.size - 1; i >= 0; i--) {
            result[this.size - 1 - i] = this.array[i];
        }
        this.array = result;
    }

    set(value, index): void {
        if (this.array[index] !== undefined) {
            this.array[index] = value;
        }
    }

    sort(): void {
        let arr: number[] = doSort(this.array)
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
        this.array = arr
    }

    toString(): string {
        let string = ''

            for (let i = 0; i < this.size; i++) {
                string = string + this.array[i]
            }

        return string
    }

    toArray(): number[] {
        return this.array;
    }

    remove(value): number {
        let isRemoved = false;
        let newArr = [];
        let deletedElem = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] !== value) {
                newArr[newArr.length] = this.array[i];
            } else  {
                if (isRemoved === false) {
                    isRemoved = true;
                    deletedElem = this.array[i]
                } else {
                    newArr[newArr.length] = this.array[i];
                }
            }
        }
        this.array = newArr
        this.size = this.array.length
        this.size = this.array.length
        return deletedElem
    }

}

const test1 = new AList([1,2,3,4,5])
test1.toArray()
test1.halfReverse()
test1.toArray()

module.exports = {AList}