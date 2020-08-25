function getSum(a, b) {
  const numArr = [];
  let lowNum;
  let highNum;

  if (a == b) {
    return a;
  }

  if (a > b) {
    lowNum = b;
    highNum = a;
  } else {
    lowNum = a;
    highNum = b;
  }

  for (let i = lowNum; i <= highNum; i++) {
    numArr.push(i);
  }

  let numSum = numArr.reduce((lowNum, highNum) => lowNum + highNum);
  return numSum;
}