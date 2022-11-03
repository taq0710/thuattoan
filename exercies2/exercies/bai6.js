function check(inputArr) {
    var sum = 0
    var count = 0
    for (var i = 0; i < inputArr.length; i++) {
        if (songto(inputArr[i])) {
            sum += Number(inputArr[i])
            count++
        }
    }
    if (count === 0) {
        console.log('NOT FOUND')
        return
    }
    var output = sum / count
    console.log(output)
}

function songto(n) {
    if (n <= 1) {
        return false
    }
    var songto = true
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return songto
}
var inputArr = [4, 6, 8, 9, 10]
check(inputArr)