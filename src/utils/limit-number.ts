/*
 * Limits a number by upper and lower limits
 * @param {number} num - number to limit
 * @param {number} upperLimit - upper limit
 * @param {number} lowerLimit - lower limit
 * @return {number} Limited number
 * */
export const limitNumber = (
  num: number,
  upperLimit: number,
  lowerLimit: number,
): number => Math.min(Math.max(lowerLimit, num), upperLimit);
