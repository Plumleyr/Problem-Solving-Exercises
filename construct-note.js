// add whatever parameters you deem necessary
function freqCounter(str) {
  let freq = new Map();

  for (let ltr of str) {
    let ltrCount = freq.get(ltr) || 0;
    freq.set(ltr, ltrCount + 1);
  }
  return freq;
}

function constructNote(str1, str2) {
  if (!str2.length) return false;
  let str1Freq = freqCounter(str1);
  let str2Freq = freqCounter(str2);

  for (let key of str1Freq.keys()) {
    if (str1Freq.get(key) > str2Freq.get(key)) return false;
  }

  return true;
}
