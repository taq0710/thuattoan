//Ta sẽ dùng vòng lặp for để duyệt qua từng phần tử, sau đó cộng dồn chúng lại với nhau. Bạn sẽ cần sử dụng một biến để lưu trữ tổng trong mỗi lần lặp.
var array = [1,2,3,4,5,6,7,8,9]
function arraysum(){
    var sum = 0
    for(var i = 0; i < array.length; i++){
        if(i%2===0){
            sum = sum + array[i]
        }
    }
    console.log(sum)
}
arraysum()