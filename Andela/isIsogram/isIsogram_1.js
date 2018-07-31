function isIsogram (str) {
    if(str === ""){
      return false;
    }
    return !/(\w).*\1/i.test(str);
}

isIsogram("Dermatoglyphics");

// solution 2
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
