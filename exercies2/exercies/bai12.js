function check(inputArr) {
  var lan_xuat_hien = []
  for (var i = 0; i < inputArr.length; i++) {
    if (lan_xuat_hien[inputArr[i]] === undefined) {
      lan_xuat_hien[inputArr[i]] = 0
    }

    lan_xuat_hien[inputArr[i]] = lan_xuat_hien[inputArr[i]] + 1
  }

  var uniquenumbercount = 0

  for (var number in lan_xuat_hien) {
    uniquenumbercount++
  }
  console.log('Số phần tử khác nhau:', uniquenumbercount)

  for (var number in lan_xuat_hien) {
    console.log('Số', number, 'xuất hiện', lan_xuat_hien[number], 'lần')
  }
}
var inputArr = [1, 2, 3, 4, 5, 1, 6, 8, 9, 8, 7, 7, 7]
check(inputArr)