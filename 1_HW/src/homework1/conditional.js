// Если а – четное посчитать а*б, иначе а+б
function evenOddChecker(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'Invalid input data'
	}
	if (a === 0 && b !== 0) {
		return a + b
	}
	if (b === 0 && a !== 0) {
		return a * b
	}
	if (a % 2 === 0) {
		return a * b;
	}
	return a + b;
}
// 2.	Определить какой четверти принадлежит точка с координатами (х,у)

function quarterChecker(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return 'Invalid input data'
	}
	if (x > 0 && y > 0) {
		return 'I';
	}
	if (x < 0 && y > 0) {
		return 'II';
	}
	if (x < 0 && y < 0) {
		return 'III';
	}
	if (x > 0 && y < 0) {
		return 'IV';
	}
	if (x === 0 && y !== 0) {
		return 'На оси абсцисс';
	}
	if (y === 0 && x !== 0) {
		return 'На оси ординат';
	}
	if (x === 0 && y === 0) {
		return 'В центре';
	}
}

// Найти суммы только положительных из трех чисел

function positiveNumbersSum(a, b, c) {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
		return 'Invalid input data'
	}
	let sum = 0;
	if (a >= 0) {
		sum += a;
	}
	if (b >= 0) {
		sum += b;
	}
	if (c >= 0) {
		sum += c;
	}
	return sum;
}

// Посчитать выражение (макс(а*б*с, а+б+с))+3

function sumMax(a, b, c) {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
		return 'Invalid input data'
	}
	if (a * b * c > a + b + c) {
		return a * b * c + 3;
	}
	return a + b + c + 3;
}

// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function ratingCounter(number) {
	if (typeof number !== 'number' || number < 0) {
		return 'Invalid input data'
	}
	if (number < 20) {
		return 'F';
	} else if (number < 40) {
		return 'E';
	} else if (number < 60) {
		return 'D';
	} else if (number < 75) {
		return 'C';
	} else if (number < 90) {
		return 'B';
	} else if (number < 100) {
		return 'A';
	}
}

module.exports = {evenOddChecker, quarterChecker, positiveNumbersSum, sumMax, ratingCounter}