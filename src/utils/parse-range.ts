/*
 * @param {string | number} range - a number or a range-string like `1-5`, `77-190` etc.
 * @return a tuple of minimum and maximum of the range.
 * If `range` parameter is a number, min and max are the same.
 * If failed to parse the given range, returns `[null, null]`
 */
export const parseRange = (range?: string | number): [number, number] => {
  if (!range) return [null, null];
  if (typeof range === 'number') return [range, range];

  const rangeRegExp = /(\d+-\d+)|(\d+)/;
  if (!rangeRegExp.test(range)) return [null, null];

  const parsedRange = range.split('-').map((item) => parseInt(item));
  if (parsedRange.length === 1) return [parsedRange[0], parsedRange[0]];

  return [parsedRange[0], parsedRange[1]];
};
