function check(inputArr) {
    var negative_array = []
    var positive_array = []
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i] < 0) {
        negative_array.push(inputArr[i])
      }
      if (inputArr[i] > 0) {
        positive_array.push(inputArr[i])
      }
    }

    if (negative_array.length > 0) {
      console.log( negative_array )
    } else {
      console.log('negative_array: NOT FOUND')
    }

    if (positive_array.length > 0) {
      console.log( positive_array )
    } else {
      console.log('positive_array: NOT FOUND')
    }
  }
  var inputArr = [-5, 4, 0, -1, 2, -9, 7, 8];
  check(inputArr)