function tbcong (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var result = sum/array.length;
    return result;
}
 
var array = [1,2,3];
var trungBinhCong = tbcong(array);
 
console.log('Trung bình cộng của mảng là ' + trungBinhCong);