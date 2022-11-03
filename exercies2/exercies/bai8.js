function check(inputArr) {
  var maxAm = 0
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < 0) {
      maxAm = inputArr[i]
      break
    }
  }
  if (maxAm !== 0) {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i] < 0 && inputArr[i] > maxAm) {
        maxAm = inputArr[i]
      }
    }
    console.log(maxAm)
  }
  else {
    console.log('NOT FOUND')
  }
}
var inputArr = [-5, 4, 0, -1, 2, -9, -7, 8];
check(inputArr)