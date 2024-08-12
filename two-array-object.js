// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let twoArrObj = {};

  for (let i = 0; i < arr1.length; i++) {
    twoArrObj[arr1[i]] = arr2[i] || null;
  }

  return twoArrObj;
}
