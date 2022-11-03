Array.prototype.forEach2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            console.log(index)
        }
    }
}

var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
courses.forEach2(function(course, index, array){
    console.log(course, index, array)
})