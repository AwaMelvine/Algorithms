function isIsogram(str) {
  let strMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if(strMap[char]) {
      return false;
    }
    strMap[char] = 1;
  }
  return true;
}
