function check(inputArr) {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i] >= inputArr[i + 1]) {
        console.log('FALSE')
        return
      }
    }
    console.log('TRUE')
  }
  var inputArr = [1, 2, 3, 4, 5, 6, 8, 9 ]
  check(inputArr)