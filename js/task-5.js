const countryName = prompt('Укажите страну');
const CHINA = 'китай';
const CHILI = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAIKA = 'ямайка';
let price;

switch (countryName.toLowerCase()) {
  case CHINA:
    price = '100';
    break;

  case CHILI:
    price = '250';
    break;

  case AUSTRALIA:
    price = '170';
    break;

  case INDIA:
    price = '80';
    break;

  case JAMAIKA:
    price = '120';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${countryName} будет стоить ${price} кредитов`);
