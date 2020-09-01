function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length == 0 && array2.length == 0) {
    return true;
  }

  const sqArr1 = array1.map((num) => num * num)
  const finalArray = [];

  for (let i = 0; i < sqArr1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (sqArr1[i] == array2[j]) {
        finalArray.push(array2[j])
        let index = array2.indexOf(array2[j])
        array2.splice(index, 1)
      }
    }
  }

  if (finalArray.length == 0 || array2.length != 0) {
    return false;
  } else if (array2.length == 0) {
    return true;
  }
}


// Best Practice
// function comp(a, b) {
  // return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
// }