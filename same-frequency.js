// add whatever parameters you deem necessary
function freqCounter(num) {
  let freq = new Map();
  let strNum = num.toString();

  for (let int of strNum) {
    let intCount = freq.get(int) || 0;
    freq.set(int, intCount + 1);
  }
  return freq;
}

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  let num1Freq = freqCounter(num1);
  let num2Freq = freqCounter(num2);

  for (let key of num1Freq.keys()) {
    if (num1Freq.get(key) !== num2Freq.get(key)) return false;
  }
  return true;
}
