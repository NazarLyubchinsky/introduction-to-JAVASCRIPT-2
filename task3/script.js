// 3. Написати функцію, яка приймає три окремі цифри та перетворює їх на
// одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.

let x = Number(prompt('Enter first number'));
let y = Number(prompt('Enter second number'));
let z = Number(prompt('Enter third number'));

function number(x, y, z) {
	x = String(x);
	y = String(y);
	z = String(z);
	str = x + y + z;
	let nums = Number(str);
	return (nums);
}

alert(number(x, y, z));