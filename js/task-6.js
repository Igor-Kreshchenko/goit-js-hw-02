let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  const value = Number(input);

  const notANumber = Number.isNaN(value);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(value);

  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    break;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
