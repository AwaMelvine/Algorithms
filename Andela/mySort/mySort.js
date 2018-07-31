function mySort(nums) {
  var sortedNums = [];
  var odds = [];
  var evens = [];

  for (var i=0; i < nums.length;i++) {
    if(isNaN(nums[i])){
      nums.splice(i, 1);
    }
    nums[i] = Math.floor(nums[i]);

    if(nums[i] % 2 === 0){
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }

  }

  return odds.concat(evens.sort((a, b) => a - b));

}



mySort([90, 45, 66, 'bye', 100.5]);
