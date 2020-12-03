// const formatString = function (string) {
//   const array = string.split('');
//   const maxStringLength = 40;

//   for (let i = 0; i < array.length; i += 1) {
//     if (i > maxStringLength) {
//       array.splice(40, i, '...');
//     }
//   }

//   const finalString = array.join('');
//   return finalString;
// };

const formatString = function (string) {
  if (string.length > 40) {
    const array = string.split('');
    let shortString;

    for (let i = 0; i < array.length; i += 1) {
      shortString = array.splice(40, i, '...');
      return shortString;
    }

    const finalString = shortString.join('');
    return finalString;
  }

  return finalString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
