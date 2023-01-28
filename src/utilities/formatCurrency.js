

export default function formatCurrency(number, currency) {
  const CURRENCY_FORMATTER = new Intl.NumberFormat("en-IN", {
    currency: currency,
    style: "currency",
  });

  return CURRENCY_FORMATTER.format(number);
}
