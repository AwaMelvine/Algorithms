function removeDuplicates(string) {
  var myArray = string.split('');
  var uniques = myArray.filter((v, i, a) => a.indexOf(v) === i).join('').replace(/\W/g, '').replace(/_/g, "").split('').sort().join('');
  var duplicates = myArray.filter((v, i, a) => a.indexOf(v) !== i);


  return { uniques: uniques, duplicates: duplicates.length };
};

removeDuplicates('th#elex_ash?');
