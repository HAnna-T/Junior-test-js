const WINNING_SUM = 123.4;

/**
@param {Array} cartItemsPrices
*/
function isIntegar(element) {
  return element % 1 !== 0;
}

function doesCartWinPrize(cartItemsPrices) {
  if (cartItemsPrices.every(isIntegar)) {
    let sum = cartItemsPrices.reduce((a, b) => a + b, 0);
    const fixedNum = parseFloat(sum).toFixed(2);
    return fixedNum == WINNING_SUM;
  }
  if (
    cartItemsPrices.every(function (element) {
      return typeof element === "number";
    })
  ) {
    const sum = cartItemsPrices.reduce((a, b) => a + b, 0);
    return sum === WINNING_SUM;
  }
  if (
    cartItemsPrices.every(function (element) {
      return typeof element === "string";
    })
  ) {
    cartItemsPrices = cartItemsPrices.map(Number);
    const sum = cartItemsPrices.reduce((a, b) => a + b, 0);
    return sum === WINNING_SUM;
  }
}

module.exports = doesCartWinPrize;
