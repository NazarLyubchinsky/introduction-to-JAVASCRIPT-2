// 2. Написати функцію, яка обчислює факторіал переданого їй числа.


let n = Number(prompt('Enter number'));
function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(n));