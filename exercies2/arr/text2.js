
function sort(inputArr) {
    var n = inputArr.length;

    for (var i = 0; i < n ; i++) {
        for (var j = i + 1; j < n ; j++) {
            if (inputArr[i] > inputArr[j]) {
                var tmp = inputArr[i]
                inputArr[i] = inputArr[j]
                inputArr[j] = tmp
            }
        }
    }
    return inputArr;
}
var inputArr = [5, 2, 3, 6, 1, 4, 9, 8, 7];
console.log(sort(inputArr));