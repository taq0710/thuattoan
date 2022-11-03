function check(inputArr) {
    var middle = parseInt(inputArr.length / 2)
    for (var i = 0; i < middle; i++) {
        if (inputArr[i] != inputArr[inputArr.length - i - 1]) {
            console.log('FALSE')
            return
        }
    }

    console.log('TRUE')
}
var inputArr = [1, 2, 3, 4, 3, 2, 1]
check(inputArr)