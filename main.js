
function isNumber(number) {
	if (Number.isInteger(number) && number >= 0) {
		return true;
	} else {
		return false;
	}
}

function compare(number1, number2) {
	if (typeof number1 === "number" && typeof number2 === "number") {
		if (number1 > number2) {
			return (`${number1} > ${number2}`)
		} else if (number1 < number2) {
			return (`${number1} < ${number2}`)
		} else { return (`${number1} = ${number2}`) }
	} else {
		console.log("This is not a number!!!");
	};
}

function factorial(number) {
	if (isNumber(number)) {
		return number ? number * factorial(number - 1) : 1;
	}
};

function concatenate(number1, number2, number3) {
	if (isNumber(number1) && isNumber(number2) && isNumber(number3)) {
		return (+`${number1}${number2}${number3}`);
	};
};

function square(width, height) {
	if (!height) {
		return (`${width * width} sq`);
		// return (width*width);
	}
	let squareMeter = (width * height);
	return (`${squareMeter} sq`);
};

function perfectNumber(params) {
	let originalNumber = params;
	let deleteSum = 0;
	for (let i = 0; i <= params / 2; i += 1) {
		if (params % i == 0) {
			deleteSum += i;
		}
	}
	if (deleteSum == originalNumber) {
		console.log(`${originalNumber} - Совершенное число`);
	};
}

function findPerfectNumber(minNumber, maxNumber) {
	for (let i = minNumber; i <= maxNumber; i += 1) {
		perfectNumber(i);
	}
};

function timeFormating(hours = 00, minutes = 00, seconds = 00) {
	if (isNumber(hours) && isNumber(minutes) && isNumber(seconds)) {
		let h = hours <= 24 ? String(hours) : "0";
		let m = minutes <= 60 ? String(minutes) : "0";
		let s = seconds <= 60 ? String(seconds) : "0";
		if (h < 10) {
			h = "0" + h;
		}
		if (m < 10) {
			m = "0" + m;
		}
		if (s < 10) {
			s = "0" + s;
		}
		return (`«${h}: ${m}: ${s}»`);
	}
}

function timeToSecond(hours = 00, minutes = 00, seconds = 00) {
	let sec;
	if (isNumber(hours) && isNumber(minutes) && isNumber(seconds)) {
		return sec = (hours * 3600) + (minutes * 60) + seconds;
	};
}

function secondsToTime(sec) {
	if (isNumber(sec) && sec < 86400) {
		let hours = (sec / 3600) ^ 0;
		let minutes = (sec - hours * 3600) / 60 ^ 0;
		let seconds = sec - hours * 3600 - minutes * 60;
		console.log(hours, minutes, seconds);
		return (`${hours < 10 ? "0" + hours : hours}h: ${minutes < 10 ? "0" + minutes : minutes}:m ${seconds < 10 ? "0" + seconds : seconds}:s`);
	}
}