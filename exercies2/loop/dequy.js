function countDown(num){
    if(num>0){
        console.log(num)
        return countDown(num-1)
    }
    return num
}
countDown(3)