function findNumber(n) {
    var check = 0
    var output = 0
    if (n < 10) {
        check = 1
        output = n
    }

    const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);
    var arrSortedUp = []
    var arrSortedDown = []
    for (var i = n; i <= 1000000000; i++) {
        if (check == 1) break;
        var iToString = i.toString()
        var arr = iToString.split("")
        var cloneArr = [...arr]
        arrSortedUp = cloneArr.sort((a, b) => a - b);
        var cloneArrSortedUp = [...arrSortedUp]
        arrSortedDown = cloneArrSortedUp.reverse()
        if (equals(arr, arrSortedUp)) {
            output = Number(arrSortedUp.join(""))
            check = 1
            break;
        }
        if (equals(arr, arrSortedDown)) {
            output = Number(arrSortedDown.join(""))
            check = 1
            break;
        }
    }
    if (check == 1) return output
}
