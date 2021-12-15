// Найти минимальный элемент массива
function minElemInArray(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let currentMinElem = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < currentMinElem) {
			currentMinElem = arr[i];
		}
	}
	return currentMinElem;
}

// Найти максимальный элемент массива

function maxElemInArray(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let currentMaxElem = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > currentMaxElem) {
			currentMaxElem = arr[i];
		}
	}
	return currentMaxElem;
}

// Найти индекс минимального элемента массива

function minElemIndex(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let currentMinElem = arr[0];
	let currentIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < currentMinElem) {
			currentMinElem = arr[i];
			currentIndex = i;
		}
	}
	return currentIndex;
}

// Найти индекс максимального элемента массива

function maxElemIndex(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let currentMaxElem = arr[0];
	let currentIndex = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > currentMaxElem) {
			currentMaxElem = arr[i];
			currentIndex = i;
		}
	}
	return currentIndex;
}

// Посчитать сумму элементов массива с нечетными индексами

function sumOddIndexElem(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return  'Invalid input data'
		}
		if (i % 2 !== 0) {
			sum += arr[i];
		}
	}
	return sum;
}

// Сделать реверс массива (массив в обратном направлении)

function reverseArr(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	// return arr.reverse()
	let result = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		result[arr.length - 1 - i] = arr[i];
	}
	return result;
}

// Посчитать количество нечетных элементов массива

function oddElemCounter(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			counter++;
		}
	}
	return counter;
}

// Поменять местами первую и вторую половину массива, например, для массива

function swapArrPart(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let half = Number((arr.length / 2).toFixed(0));
	let res = arr;
	for (let i = 0; i < half; i++) {
		let temp = res[i];
		res[i] = arr[arr.length - half + i];
		arr[arr.length - half + i] = temp;
	}
	return res;
}

// Bubble

function bubbleSort(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let arrLen = arr.length;
	for (let i = arrLen - 1; i >= 0; i--) {
		for (let m = 0; m <= i; m++) {
			if (arr[m] > arr[m + 1]) {
				let temp = arr[m];
				arr[m] = arr[m + 1];
				arr[m + 1] = temp;
			}
		}
	}

	return arr;
}

// Insertion

function insertionSort(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let arrLen = arr.length;
	for (let i = 1; i < arrLen; i++) {
		// i = 1 (мы принимаем как факт, что arr[0] - отсортирован)
		let el = arr[i];
		let j = i;
		while (j > 0 && arr[j - 1] >= el) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = el;
	}
	return arr;
}

// Selection Sort

function selectionSort(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let arrLen = arr.length;
	for (let i = 0; i < arrLen; i++) {
		let min = i;
		for (let j = i + 1; j < arrLen; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}

// Quick sort

function quickSort(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	if (arr.length < 2) {
		return arr;
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

		return quickSort(left).concat(pivot, quickSort(right));
}

// Merge sort

function mergeSort(arr) {
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	if(arr.length < 2 ){
		return arr
	}
	const middle = +(arr.length/2).toFixed((0))
	let left = []
	for (let i = 0; i < middle; i++) {
		left[left.length] = arr[i]
	}
	let right = []
	for (let i = middle; i < arr.length; i++) {
		right[right.length] = arr[i]
	}
	return mergeSub(mergeSort(left), mergeSort(right))
}

function mergeSub(left, right) {
	let array = [];

	while(left.length && right.length) {
		if (left[0] < right[0]) {
			array[array.length] = left.shift()
		} else {
			array[array.length] = right.shift()
		}
	}
	return array.concat(left.concat(right))
}

// Heap sort
function heapSort(arr){
	if (!Array.isArray(arr)) {
		return 'Invalid input data'
	}
	let len = arr.length,
		end = len - 1;

	doHeap(arr, len);

	while(end > 0){
		swap(arr, 0, end);
		end--
		len--
		siftDown(arr, len, 0);
	}
	return arr;
}

function doHeap(arr, len){
	let mid = Math.floor((len-1)/(1+1));
	while(mid >= 0){
		siftDown(arr, len, mid--);
	}
	return arr
}

function siftDown(arr, len, start){
	let root = start;
	let child = start*(1+1) + 1;
	if(child < len && arr[child] > arr[root]){
		root = child;
	}
	if(child+1 < len && arr[child+1] > arr[root]){
		root = child+1
	}
	if(root !== start){
		swap(arr, start, root);
		siftDown(arr, len, root)
	}
}

function swap(arr, i, j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
module.exports = {minElemInArray, maxElemInArray, minElemIndex, maxElemIndex, sumOddIndexElem, reverseArr, oddElemCounter, swapArrPart, bubbleSort, insertionSort, selectionSort, quickSort, mergeSort,heapSort}
