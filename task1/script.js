// 1. Написати функцію, яка приймає 2 числа та повертає -1, якщо перше
// менше, ніж друге; 1 - якщо перше більше, ніж друге; та 0 – якщо числа
// рівні.

let x = Number(prompt('Enter first number'));
let y = Number(prompt('Enter second number'));
function comparisonNum(x, y) {
	if (x < y) {
		return -1;

	} else {
		if (x > y) {
			return 1;
		} else {
			if (x == y) {
				return 0;
			}
		}
	}
}
alert(comparisonNum(x, y));
