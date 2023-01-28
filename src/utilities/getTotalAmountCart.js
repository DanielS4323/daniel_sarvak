function getTotalAmountCart(cart, currentCurrency) {
  if (!cart.length) {
    return;
  } else {
    const amount = cart.reduce((acc, product) => {
      const prices = product.prices;
      const currentPrice = prices.find(
        (price) => price.currency.label === currentCurrency
      );

      if (currentPrice) {
        const totalAmount = currentPrice.amount * product.quantity;
        return (acc += totalAmount);
      }
      return 0;
    }, 0);

    const rounded = amount.toFixed(2);
    return rounded;
  }
}

export default getTotalAmountCart;
