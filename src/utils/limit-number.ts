/*
 * Limits a number by upper and lower limits
 * @param {number} num - number to limit
 * {number} upperLimit - upper limit
 * {number} lowerLimit - lower limit
 * @return {number} Limited number.
 * */
export const limitNumber = (
  num: number,
  upperLimit: number,
  lowerLimit: number,
): number => Math.min(Math.max(lowerLimit, num), upperLimit);
