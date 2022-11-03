
function check(array){
    var max = array[0];
    var min = array[0];   
    for (var i = 0; i < array.length; ++i) {
        if (max < array[i]) { 
            max = array[i];
        }
        if(min > array[i]){
            min = array[i];
        }
    }
    console.log("max= ",max);
    console.log("min= ",min);
}

var array = [5, 6, 4, 2, 9, 11, 14];

check(array);