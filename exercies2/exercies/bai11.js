function check(inputArr) {
    var max1 = inputArr[0], max2, max3
    for (var i = 0; i < inputArr.length; i++) {
        if (max1 < inputArr[i]) {
            max1 = inputArr[i]
        }
    }
    for (var i = 0; i < inputArr.length; i++) {
        if ((max2 === undefined || max2 < inputArr[i]) && max1 > inputArr[i]) {
            max2 = inputArr[i]
        }
    }
    for (var i = 0; i < inputArr.length; i++) {
        if ((max3 === undefined || max3 < inputArr[i]) && max2 > inputArr[i]) {
            max3 = inputArr[i]
        }
    }
    console.log({
        max1,
        max2,
        max3,
    })
}
var inputArr = [1, 2, 3, 4, 5, 1, 6, 8, 9, 8, 7, 7]
check(inputArr)