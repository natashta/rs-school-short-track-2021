/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let count = 0;
  let i = array.length;
  let res;
  while (count < i) {
    res = Math.floor((count + i) / 2);
    if (value <= array[res]) i = res;
    else count = res + 1;
  }
  return count;
}

module.exports = findIndex;
