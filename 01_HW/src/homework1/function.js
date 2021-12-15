// Получить строковое название дня недели по номеру дня
function dayWeek(number) {
	if (number > 7 || number < 0 || !number || typeof number !== 'number') {
		return ("Invalid input data");
	}
	let weekArr = [
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота",
		"Воскресенье",
	];
	return weekArr[number - 1];
}

// Найти расстояние между двумя точками в двухмерном декартовом пространстве

function distanceFind(a, b) {
	if (!a || !b || typeof a !== 'object' || typeof b !== "object" || typeof a.x !== 'number'
		|| typeof a.y !==  'number' || typeof b.x !== 'number' || typeof b.y !== 'number') {
		return 'Invalid input data'
	} else {
		return +Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)).toFixed(2)
	}

}

// Вводим число(0-999 млрд.), получаем строку с прописью числа.

const stringifyNumberData = [
	["Один", "Десять", "Сто"],
	["Два", "Двадцать", "Двести"],
	["Три", "Тридцать", "Триста"],
	["Четыре", "Сорок", "Четыреста"],
	["Пять", "Пятьдесят", "Пятьсот"],
	["Шесть", "Шестьдесят", "Шестьсот"],
	["Семь", "Семьдесят", "Семьсот"],
	["Восемь", "Восемьдесят", "Восемьсот"],
	["Девять", "Девяносто", "Девятьсот"],
];

const exceptionArr = [
	"Одинадцать",
	"Двенадцать",
	"Тринадцать",
	"Четырнадцать",
	"Пятнадцать",
	"Шестнадцать",
	"Семнадцать",
	"Восемнадцать",
	"Девятнадцать",
];

const digits = [
	["тысяча", "тысячи", "тысяч"],
	["миллион", "миллиона", "миллионов"],
	["миллиард", "миллиарда", "миллиардов"],
];

// Main

function numberToString(number) {
	if (number < 0) {
		return 'Число должно быть положительным!'
	}
	if (number === 0) {
		return 'Ноль'
	}
	if (!number) {
		return "Пусто"
	}
	if (typeof number !== 'number') {
		return "Не число"
	}
	if (number.toString().length > 12) {
		return 'Число выходит за пределы доступного диапазона!'
	}

	let regex = /(?=(\d{3})+(?!\d))/g;
	let dividedToDigits = number
		.toString()
		.replace(regex, " ")
		.split(" ")
		.filter((el) => el !== "");
	let result = [];
	for (let i = 0; i < dividedToDigits.length; i++) {
		let dividedNumber = dividedToDigits[i].toString().split("");
		let exceptionDetected = false;
		let lastNumber = String;
		for (let m = 0; m < dividedNumber.length; m++) {
			if (dividedNumber[m] !== '0') {
				if (dividedNumber[m] === "1" && dividedNumber[m + 1] !== "0" && dividedNumber.length - m - 1 === 1) {
					let exceptionNumber = Number(dividedNumber[m] + dividedNumber[m + 1]);
					result.push(exceptionArr[exceptionNumber - 10 - 1]);
					m += 2;
					exceptionDetected = true;
				} else if ((dividedNumber[m] === "1" && dividedToDigits.length - i - 1 === 1 && dividedNumber.length === 1)
					|| (dividedNumber.length === 3 && m === 2 && dividedNumber[m] === "1" && dividedToDigits.length - i - 1 === 1)
					|| (dividedNumber.length === 2 && m === 1 && dividedNumber[m] === "1" && dividedToDigits.length - i - 1 === 1)) {
					result.push("Одна");
				} else if ((dividedNumber[m] === "2" && dividedToDigits.length - i - 1 === 1 && dividedNumber.length === 1)
					|| (dividedNumber.length === 3 && m === 2 && dividedNumber[m] === "2" && dividedToDigits.length - i - 1 === 1)
					|| (dividedNumber.length === 2 && m === 1 && dividedNumber[m] === "2" && dividedToDigits.length - i - 1 === 1)) {
					result.push("Две");
				} else {
					result.push(stringifyNumberData[Number(dividedNumber[m]) - 1][dividedNumber.length - m - 1]);
				}
			}
			lastNumber = result[result.length - 1];
		}

		switch (dividedToDigits.length - i) {
			case 4:
				!exceptionDetected ? result.push(selectDigits(lastNumber, 2)) : result.push("миллиардов");
				break;
			case 3:
				!exceptionDetected ? result.push(selectDigits(lastNumber, 1)) : result.push("миллионов")
				break;
			case 2:
				!exceptionDetected ? result.push(selectDigits(lastNumber, 0)) : result.push("тысяч");
				break;
		}
		exceptionDetected = false;
	}
	return (
		result.join(" ").substring(0, 1) +
		result.join(" ").substring(1).toLowerCase()
	);
}

//  Select Digits

function selectDigits(number, pos) {
	if (number.toLowerCase() === "одна") {
		return digits[0][0];
	}
	if (number.toLowerCase() === "две") {
		return digits[0][1];
	}
	for (let i = 0; i < stringifyNumberData.length; i++) {
		for (let m = 0; m < stringifyNumberData[i].length; m++) {
			if (number === stringifyNumberData[i][m]) {
				if (i < 4 && m < 1) {
					return digits[pos][1];
				} else {
					return digits[pos][2];
				}
			}
		}
	}
}

// Строку в число

function stringToNumber(str) {
	if (!str) {
		return "Пусто"
	}
	if (typeof str !== 'string') {
		return "Не строка"
	}
	if (str === 'Ноль') {
		return 0
	}
	let numberResult = [];
	let result = [];
	let splitString = str.split(' ')
	let startPoint = 0;

	for (let i = 0; i < splitString.length; i++) {
		for (let j = 0; j < stringifyNumberData.length; j++) {
			for (let m = 0; m < stringifyNumberData[j].length; m++) {
				if (splitString[i].toLowerCase() === stringifyNumberData[j][m].toLowerCase()) {
					let modifier = j + 1
					for (let k = 0; k < m; k++) {
						modifier = modifier * 10;
					}
					result.push(modifier)
				}
			}
		}

		// check exception 11-19 in string

		for (let z = 0; z < exceptionArr.length; z++) {
			if (
				splitString[i].toLowerCase() === exceptionArr[z].toLowerCase()
			) {
				result.push(z + 11);
			}
		}
		// check
		if (splitString[i].toLowerCase() === "одна") {
			result.push(1);
		}
		if (splitString[i].toLowerCase() === "две") {
			result.push(2);
		}

		if (divideCheck(digits[2], splitString[i])) {
			result.push(splitString[i]);
			numberResult.push(
				divideNumbers(
					result.slice(startPoint, i),
					"billion",
					result.slice(startPoint, i).length
				)
			);
			startPoint = i + 1;
		} else if (divideCheck(digits[1], splitString[i])) {
			result.push(splitString[i]);
			numberResult.push(
				divideNumbers(
					result.slice(startPoint, i),
					"million",
					result.slice(startPoint, i).length
				)
			);
			startPoint = i + 1;
		} else if (divideCheck(digits[0], splitString[i])) {
			result.push(splitString[i]);
			numberResult.push(
				divideNumbers(
					result.slice(startPoint, i),
					"thousand",
					result.slice(startPoint, i).length
				)
			);
		}
	}

	// if modifier exists
	let reminder = 0;
	for (let i = result.length - 1; i >= 0; i--) {
		if (typeof result[i] === "number") {
			reminder = reminder + result[i];
		} else {
			return numberResult.reduce((a, b) => a + b) + reminder;
		}
	}
	return result.reduce((a, b) => a + b);

}

function divideNumbers(arr, divider, endPoint) {
	let divideResult = 0;
	for (let i = 0; i < endPoint; i++) {
		if (typeof arr[i] === "number") {
			divideResult = divideResult + arr[i];
		}
	}
	if (divider === "billion") {
		return Number(divideResult + "000000000");
	}
	if (divider === "million") {
		return Number(divideResult + "000000");
	}
	if (divider === "thousand") {
		return Number(divideResult + "000");
	}
}

function divideCheck(arr, val) {
	return arr.some(arrVal => val === arrVal)
}

module.exports = {dayWeek, distanceFind, numberToString, stringToNumber}

