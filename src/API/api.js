export async function getPrice(coinName) {
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=USD,JPY,EUR`;
  const response = await fetch(url);
  const { USD } = await response.json();
  return USD;
}
