/**
 * creates an Array of index
 * @param {number} n - a `number` indicates the length of the Array
 * @returns `Array<number>`
 *
 * @example
 * createRange(3); // [0, 1, 2]
 */
const createRange = (n) => Array.from(Array(n).keys());

/**
 * creates an Array of empty strings: which makes it lighter and best for performance
 * @param {number} n - a `number` indicates the length of the Array
 * @returns `Array<empty-string>`
 *
 * @example
 * createRangeLite(3); // ["", "", ""]
 */
export const createRangeLite = (n) => Array(n).fill("");

export default createRange;

