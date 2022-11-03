function check(inputArr) {
  inputArr.sort()
  var max = [0, 0]
  var count = 1
  for (var i = inputArr.length - 1; i > 0; --i) {
    if (inputArr[i] == inputArr[i - 1]) ++count;
    else {
      if (max[1] < count) {
        max[0] = inputArr[i]
        max[1] = count
      }
      count = 1
    }
  }
  console.log("Phần tử " + max[0] + " xuất hiện nhiều nhất với " + max[1] + " lần")
}
var inputArr = [1, 2, 5, 1, 2, 4, 8, 9, 6, 7, 3, 2, 5]
check(inputArr)