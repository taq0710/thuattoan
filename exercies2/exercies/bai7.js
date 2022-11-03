function so_chinh_phuong(a) {
  if (Math.sqrt(a) % 1 == 0) {
    return true
  }
  else {
    return false
  }
}
function check(inputArr) {
  var count = 0
  for (var i = 0; i < inputArr.length; i++) {
    if (so_chinh_phuong(inputArr[i])) {
      console.log(inputArr[i])
    }
  }
  if (count === 0) {
    console.log('NOT FOUND')
    return
  }
}
var inputArr = [2, 4, 6, 8, 16, 25]
check(inputArr)

