const formatString = function (string) {
  const maxStringLength = 40;
  if (string.length > maxStringLength) {
    const shortString = string.slice(0, 40) + '...';
    return shortString;
  }

  return string;
};

// const formatString = function (string) {
//   if (string.length > 40) {
//     const array = string.split('');
//     let changedArray;

//     for (let i = 0; i < array.length; i++) {
//       if (i > 40) {
//         changedArray = array.splice(40, i, '...');
//         const shortString = array.join('');
//         return shortString;
//       }
//     }
//   }

//   return string;
// };

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
