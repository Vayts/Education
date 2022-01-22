export interface IList{
    clear: () => void;
    add: (value) => void;
    getSize: () => number;
    set: (value, index) => void;
    get: (index) => number;
    remove: (value) => number;
    toArray: () => number[];
    toString: () => string;
    contains: (value) => boolean;
    maxValue: () => number;
    minValue: () => number;
    maxIndex: () => number;
    minIndex: () => number;
    reverse: () => void;
    halfReverse: () => void;
    retainAll: (array) => void;
    removeAll: (array) => void;
    sort: () => void;
    print: () => void;
}

export interface ITree{
    init: (array) => void;
    clear: () => void;
    size: () => number;
    insert: (value) => void;
    print: (node, cb) => void;
    toArray: () => [];
    search: (value) => any;
    width: () => number;
    height: () => number;
    nodes: () => number;
    leaves: () => number;
    reverse: () => void;
    minNode: () => any;
    maxNode: () => any;
    remove: (value) => any;
}