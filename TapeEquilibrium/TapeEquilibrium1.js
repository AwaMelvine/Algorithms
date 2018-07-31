function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let diff = [];
    let len = A.length;

    for (let i = 1; i < len; i++) {
        let startArr = A.slice(0, i);
        let endArr = A.slice(i);
        let currentDiff =
            startArr.reduce((a, b) => a + b)
              - endArr.reduce((a, b) => a + b);

        diff.push(Math.abs(currentDiff));
    }
    return Math.min(...diff);
}
