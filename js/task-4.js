const formatString = function (string) {
  const array = string.split('');

  for (let i = 0; i < array.length; i += 1) {
    if (i > 40) {
      array.splice(40, i, '...');
    }
  }

  const finalString = array.join('');
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
