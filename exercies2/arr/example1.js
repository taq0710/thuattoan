// function array() {
//     var sort_up = [5, 2, 3, 6, 1, 4, 9, 8, 7]
//     var newArr = sort_up.sort();
//     console.log(newArr)
// }
// array()


// tăng dần 
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
var inputArr = [5, 2, 3, 6, 1, 4, 9, 8, 7];
sort(inputArr);
console.log(inputArr);