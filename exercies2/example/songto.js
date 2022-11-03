function ktsonguyento(n){
    
    var flag = true
    if( n < 2 ){
        flag = false
    }
    else{
        for(var i = 2; i< n-1; i++){
            if(n%i==0){
                flag = false;
                break
            }
        }
    }
    if(flag==true){
        console.log(n + 'là số nguyên tố ')

    }
    else{
        console.log(n + 'không phải là số nguyên tố')
    }
}
ktsonguyento(4)