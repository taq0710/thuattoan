
function check(n) {
    var flag = 1;
    if (n < 2) return flag = 0;
    var i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}
var array = [5, 6, 4, 2, 9, 11, 14];
for (var i = 0; i < array.length; i++) {
    if (check(array[i]) == 1) console.log(array[i]);
}