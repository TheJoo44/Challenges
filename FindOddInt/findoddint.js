function findOdd(A) {
  let answer;

  const numCount = A.reduce(function (key, value) {
    key[value] = ++key[value] || 1;
    return key;
  }, {});

  for (let property in numCount) {
    if (numCount[property] % 2 != 0) {
      answer = parseInt(property)
    }
  }
  return answer;
}