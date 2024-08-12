// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let correct = 0;
  let str2Sub = "";

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[correct]) {
      str2Sub += str2[i];
      correct++;
      if (correct === str1.length) break;
    }
  }
  return str2Sub === str1;
}

/** 
   * if you actually read this i made it so where if there was a repeating letter of the string it would reset made it so much harder than it needed to be lmfao
   * 
    for (let i = 0; i < str2.length; i++) {
      if (str2Sub === str1) return true;
      if (str1.includes(str2[i]) && str1[correct] !== str2[i]) {
        correct = 0;
        str2Sub = "";
      }
      if (str1[correct] === str2[i]) {
        str2Sub += str2.slice(i, i + 1);
        correct++;
      }
    }
    return str2Sub === str1;
  */
