// 4. Написати функцію, яка приймає довжину та ширину прямокутника та
// обчислює його площу. Якщо функцію передали 1 параметр, вона
// обчислює площу квадрата.

let x = Number(prompt('Enter width'));
let y = Number(prompt('Enter height'));

function squareArea(x, y) {
	let result;
	if (y == 0) {
		result = Math.pow(x, 2);
	} else {
		result = x * y;
	}
	return result;
}

alert("square area: " + " " + squareArea(x, y));
