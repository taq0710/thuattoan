var arr = [1,2,3,4,5,6,7,8,9]

function tongsochan(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(tongsochan(arr))