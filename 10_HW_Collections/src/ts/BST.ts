import {ITree} from "./types";

class TreeNode {
    value: number | string;
    right: null | TreeNode;
    left: null | TreeNode;

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

}

class BST implements ITree {
    root: null | TreeNode;
    
    constructor() {
        this.root = null;
    }
    
    clear(): void {
        this.root = null;
    }

    height(): number {

        if (this.root === null) {
            return 0
        }

        function counterHeight(current, height): number {
            if (current.right === null && current.left === null) {
                return height
            }
            if (current.right && current.left) {
                return Math.max(counterHeight(current.right, height+1), counterHeight(current.left, height+1))
            } else if (current.right === null) {
                return counterHeight(current.left, height+1)
            } else {
                return counterHeight(current.right, height+1)
            }
        }

        return counterHeight(this.root, 1)
    }

    init(array): void {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i])
        }
    }

    insert(value): void {

        if (!value) {
            return undefined;
        }

        if (this.root === null) {
            this.root = new TreeNode(value)
        } else {
            let current = this.root

            while(current) {

                if (current.value === value) {

                    if (current.right === null) {
                        current.right = new TreeNode(value)
                        return
                    } else {
                        current = current.right
                    }

                }

                if (current.value < value) {

                    if (current.right === null) {
                        current.right = new TreeNode(value)
                        return
                    } else {
                        current = current.right
                    }

                }

                if (current.value > value) {

                    if(current.left === null) {
                        current.left = new TreeNode(value)
                        return
                    } else {
                        current = current.left
                    }

                }
            }
        }
    }

    leaves(): number {

        function counterLeaves(current): number {
            if (current === null) {
                return 0
            }

            if (current.right === null && current.left === null) {
                return 1
            }

            return counterLeaves(current.right) + counterLeaves(current.left)
        }

        return counterLeaves(this.root);
    }

    maxNode(): any {
        let current = this.root

        if (current === null) {
            return 'Empty'
        }

        while(current) {

            if (current.right === null) {
                return current
            }

            current = current.right

        }

    }

    minNode(): any {
        let current = this.root;

        if (current === null) {
            return 'Empty'
        }

        while(current) {

            if (current.left === null) {
                return current
            }

            current = current.left

        }
    }

    nodes(): number {
        const arr = this.toArray()
        return arr.length;
    }

    remove(value): any {

        if (this.root === null) {
            return 'Empty'
        }

        this.root = removeNode(this.root, value)

        function removeNode(current, value): any {
            if(current == null){
                return null;
            }
            if(value < current.value){
                current.left = removeNode(current.left, value);
            }else if(value > current.value){
                current.right = removeNode(current.right, value);
            }else{
                if(current.left == null && current.right == null){
                    current = null;
                    return current;
                }else if(current.left == null){
                    current = current.right;
                    return current;
                }else if(current.right == null){
                    current = current.left;
                    return current;
                }else{
                    let tempNode= min(current.right);
                    current.value = tempNode.value;
                    current.right = removeNode(current.right, tempNode.value);
                    return current;
                }
            }
            return current;
        }

        function min(node) {
            while(node && node.left) {
                node = node.left
            }
            return node;
        }
    }

    search(value): any {
        let current = this.root;

        if (current === null) {
            return 'Empty'
        }

        while(current) {
            if (current.value === value) {
                return current
            }

            if (current.value > value) {
                current = current.left
            }

            if (current.value < value) {
                current = current.right
            }
        }

        return 'Error'

    }
    // Я задание не понял=(. Почему два метода должны возвращать узлы...
    size(): number {
        const arr = this.toArray()
        return arr.length;
    }

    toArray(): any {
        let res = []
        InOrderMethod(this.root, res)

        function InOrderMethod(current, res): void{
            if (current) {
                InOrderMethod(current.left, res)
                res.push(current.value)
                InOrderMethod(current.right, res)
            }
        }
        return res
    }

    width(): number {
        let currentWidth = 0;
        let maxWidth = 0;
        const height = this.height()
        const current = this.root;

        if (this.root === null) {
            return 0
        }

        if (current.right === null && current.left === null) {
            return 1
        }

        for (let i = 1; i <= height; i++) {
            currentWidth = counterWidth(current, i)

            if (currentWidth > maxWidth) {
                maxWidth = currentWidth;
            }
        }

        function counterWidth(current, level) {

            if (current === null) {
                return 0
            }

            if (level === 1) {
                return 1
            }

            return counterWidth(current.right, level - 1) + counterWidth(current.left, level - 1)

        }
        return maxWidth

    }

    print(cb): void {
        cb(this.root)
    }

    reverse(): void {
        let current = this.root

        swap(current)

        function swap(current) {
            if (current === null) {
                return null
            }

            if (current.left && current.right) {
                let temp = current.right
                current.right = current.left
                current.left = temp;
                swap(current.right)
                swap(current.left)
            } else if (current.left === null) {
                current.left = current.right
                current.right = null;
                swap(current.left)
            } else if (current.right === null){
                current.right = current.left
                current.left = null;
                swap(current.right)
            } else {
                return
            }
        }
    }
}

function order(current) {
    if (current) {
        order(current.left)
        console.log(current)
        order(current.right)
    }
}
function preOrder(current) {
    if (current !== null) {
        console.log(current)
        preOrder(current.left)
        preOrder(current.right)
    }
}

function postOrder (current) {
    if (current) {
        postOrder(current.left)
        postOrder(current.right)
        console.log(current)
    }
}
module.exports = {preOrder, postOrder, order, BST}


