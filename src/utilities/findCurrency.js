export default function findCurrency(prices, match) {
    return prices?.find((el => el.currency.label === match)).amount
}
