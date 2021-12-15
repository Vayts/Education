// Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function evenSum() {
	let sum = 0;
	let counter = 0;
	for (let i = 1; i <= 99; i++) {
		if (i % 2 === 0) {
			sum += i;
			counter++
		}
	}
	return `${sum} ${counter}`;
}

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function primeNumberChecker(number) {
	if(!number || typeof number === 'string') {
		return "It must be a number"
	}
	for (let i = number - 1; i > 1; i--) {
		if (number % i === 0) {
			return false
		}
	}
	return true
}

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// Последовательность

function rootSearch(number) {
	if (number === 0) {
		return  0
	} else if (number < 0) {
		return 'Number must be a positive'
	}
	for (let i = 0; i < number; i++) {
		if (i * i === number) {
			return i;
		} else if (i * i > number) {
			return i - 1;
		}
	}
}

// Бинарный

function binaryRootSearch(number) {
	if (number < 0) {
		return 'Number must be a positive'
	}
	let left = 0;
	let right = number;
	let middle = 0;
	while (left <= right) {
		middle = Number(((left+right) / 2).toFixed(0))
		let result = middle * middle
		if (result === number) {
			return Number(middle.toFixed(0))
		}
		if (result < number) {
			left = middle + 1
		} else {
			right = middle - 1
		}

	}
	return left - 1
}

// Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function factorialSearch(number) {
	if (number < 0) {
		return 'Number must be a positive'
	}
	let result = 1;
	for (let i = 1; i <= number; i++) {
		result = result * i;
	}
	return result;
}

// Посчитать сумму цифр заданного числа

function digitsSum(number) {
	if (!number || typeof number === 'string' || number < 0) {
		return 'Invalid input data'
	}
	let string = number.toString()
	let sum = 0;
	for (let i = 0; i < string.length; i++) {
		sum += Number(string[i]);
	}
	return sum;
}

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function reverseNumber(number) {
	if (number && number.toString().length === 1 || number === 0) {
		return number;
	}
	if (!number || typeof number === 'string') {
		return 'Error';
	}

	let result = []
	const isNumberNegative = number < 0;
	let temp = number.toString().replace('-', '').split('');
	for (let i = temp.length - 1; i >= 0; i--) {
		result[temp.length - 1 - i] = temp[i]
	}
	const finalResult = result.join('');
	return isNumberNegative ? '-' + finalResult : finalResult
}

module.exports = {reverseNumber, evenSum, digitsSum,factorialSearch, binaryRootSearch, rootSearch, primeNumberChecker}