function index_max(array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += Number(array[i])
  }

  var max = sum / array.length

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      console.log(i + 1)
    }
  }
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
index_max(array)