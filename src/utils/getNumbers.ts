export const getNumbersPrice = (string: any) =>
  string
    .split(' ')
    .map((item: any) => +item)
    .filter((item: any) => !item === false);
export const getNumbersArea = (string: any) =>
  string
    .split(' ')
    .map((item: any) => +item.match(/\d+/))
    .filter((item: any) => item !== 0);
