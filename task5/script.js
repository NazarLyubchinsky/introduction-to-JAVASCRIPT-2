// 5. Написати функцію, яка перевіряє, чи є передане їй число досконалим.
// Досконале число – це число, що дорівнює сумі всіх своїх дільників.
let x = Number(prompt('Enter number'));
function perfectNum(x) {
	let numb = 0;
	for (let i = 1; i <= x / 2; i++) {
		if (x % i === 0) {
			numb += i;
		}
	}
	if (numb === x && numb !== 0) {
		return "It's perfect number";
	} else {
		return "It ain't pefect number";
	}
}
alert(perfectNum(x));
