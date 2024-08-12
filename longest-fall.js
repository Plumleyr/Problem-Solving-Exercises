// add whatever parameters you deem necessary
function longestFall(arr) {
  if (!arr.length) return 0;

  let longest = 1;
  let currLongest = 1;

  for (let i = 0; i < arr.length; i++) {
    if (currLongest > longest) {
      longest = currLongest;
    }

    if (arr[i] > arr[i + 1]) {
      currLongest++;
    } else if (arr[i] <= arr[i + 1]) {
      currLongest = 1;
    }
  }
  return longest;
}
