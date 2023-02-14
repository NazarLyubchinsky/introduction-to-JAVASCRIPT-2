// 6. Написати функцію, яка приймає мінімальне та максимальне значення
// для діапазону, та виводить лише ті числа з діапазону, які є досконалими.
// Використовуйте написану раніше функцію, щоб дізнаватися, чи
// досконале число, чи ні

let x = Number(prompt('Enter minimum number'));
let y = Number(prompt('Enter maximum number'));
function numbersPerf(x, y) {
	sum = 0;
	for (i = x; i <= y; i++) {
		for (j = 1; j <= i / 2; j++) {
			if ((i % j === 0)) {
				sum += j;
			}
		}
		if (i == sum) {
			console.log(i);
		}
		sum = 0;
	}
	return 0;
}
numbersPerf(1, 25000);

