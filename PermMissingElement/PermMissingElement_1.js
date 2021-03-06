function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if(!A.length) {
      return 1;
  }

  if(A.length === 1) {
      return A[0] + 1;
  }

  let sortedA = A.sort((a, b) => a - b);


  for (let i = 1; i < A.length + 1; i++) {
      // console.log([i-1, sortedA[i-1]]);
      if(sortedA[i-1] && sortedA[i-1] !== i) {
          return i;
      }
  }
  return sortedA.reverse()[0] + 1;
}
  
