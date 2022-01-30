const WINNING_SUM = 123.4;

/**
@param {Array} cartItemsPrices
*/

function doesCartWinPrize(cartItemsPrices) {
  let sum = 0;

  for (let i = 0; i < cartItemsPrices.length; i++) {
    sum += +cartItemsPrices[i];
  }

  return +sum.toFixed(2) === WINNING_SUM;
}

module.exports = doesCartWinPrize;
