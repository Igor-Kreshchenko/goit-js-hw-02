const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();

  const isContain =
    lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')
      ? true
      : false;

  return isContain;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
