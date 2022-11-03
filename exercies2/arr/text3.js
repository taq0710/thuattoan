function check(array, size) {
    var result = [];
    var count = 0;
    for (var i = 0; i < size - 1; ++i) {
        for (var j = i + 1; j < size; ++j) {
            if (array[i] == array[j]) {

                result[count] = array[i];
                ++count;
            }
        }
    }
    return result
}
var array = [5, 2, 3, 7, 8, 2, 5, 4, 6, 7, 8, 9, 1];
var result = check(array, array.length);
console.log(result);
