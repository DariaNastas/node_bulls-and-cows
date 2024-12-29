/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
  } while (new Set(randomNumber.toString()).size !== 4);

  // eslint-disable-next-line no-console
  console.log('Generated Random Number:', randomNumber);

  return randomNumber;
}

const newRandomNumber = generateRandomNumber();
console.log('Random Number from Function:', newRandomNumber);

module.exports = { generateRandomNumber };
