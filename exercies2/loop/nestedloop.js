//vòng lặp lồng nhau
//vòng lặp 1 lấy ra mảng con của mảng cha myArray
//vòng lặp sau lấy ra từng phần tử của mảng con
var myArray = [
    [1,2],
    [3,4],
    [5,6]

]
for(var i = 0; i<myArray.length; i++){
    for(var j = 0; j<myArray[i].length; j++){
        console.log(myArray[i][j])
    }
}