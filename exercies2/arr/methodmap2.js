Array.prototype.map2 = function(){
    var output = [], arraylength = this.length
    for(var i = 0; i < arraylength; ++i){
        var result = callback(this[i], i);
        output.push(result)
    }
    return output;

}
var courses = [
    'javascript',
    'PHP',
    'Ruby'
]
courses.map2(function(courses, index){
  console.log(index, courses);   
});