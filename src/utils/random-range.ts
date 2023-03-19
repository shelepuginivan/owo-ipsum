/*
 * Returns a random number from the half-closed interval `[from; to)`
 * @param {number} from - lower limit of the interval (included)
 * @param {number} to - upper limit of the interval (excluded)
 * @return random number from the interval
 * */
export const randomRange = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from)) + from;
