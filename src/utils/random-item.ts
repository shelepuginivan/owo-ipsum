/*
 * Returns a random array element
 * @param {T[]} array - array from which an element is returned
 * @returns {T} random element of the given array
 * */
export const randomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];
