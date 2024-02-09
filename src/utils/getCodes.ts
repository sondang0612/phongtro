export const getCodes = (value: any, arr: any) => {
  const result = arr.filter(
    (price: any) => value >= price.min && value <= price.max
  );

  return result[result.length - 1];
};
