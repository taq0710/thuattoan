function sort(inputArr) {
    var n = inputArr.length;

    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}
var inputArr = [];
sort(inputArr);
console.log(inputArr);