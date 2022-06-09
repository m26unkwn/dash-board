export const piePercentage = (value, data) => {
  const filterValue = data.find((item) => item.product === value);
  const sumOfAllProduct = data.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);
  return ((filterValue?.value / sumOfAllProduct) * 100).toFixed();
};
