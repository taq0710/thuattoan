function maxIndex(array){
    var max =  array[0];
    var max_index= 0;   
    for (var i = 0; i < array.length; ++i) {
        if (max < array[i]) { 
            max = array[i];
            max_index =i;
        }
    }
    console.log("max_index= ",max_index);
}

var array = [5, 6, 4, 2, 9, 11, 14];

maxIndex(array)