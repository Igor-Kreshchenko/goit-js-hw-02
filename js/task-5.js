const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();

  const isContain =
    normalizedMessage.includes('spam') || normalizedMessage.includes('sale')
      ? true
      : false;

  return isContain;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
