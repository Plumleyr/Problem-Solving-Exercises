// add whatever parameters you deem necessary
function countPairs(arr, num) {
  // arr.sort((a, b) => a - b);
  // let left = 0;
  // let right = arr.length - 1;
  // let count = 0;

  // while (left < right) {
  //   if (arr[left] + arr[right] === num) {
  //     count++;
  //     left++;
  //     right--;
  //   } else if (arr[left] + arr[right] > num) {
  //     right--;
  //   } else {
  //     left++;
  //   }
  // }
  // return count;

  let seen = new Set();
  let count = 0;

  for (let value of arr) {
    let target = num - value;
    if (seen.has(target)) {
      count++;
    }
    seen.add(value);
  }

  return count;
}
