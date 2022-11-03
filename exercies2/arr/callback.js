Array.prototype.map2 = function(callback){
    var arraylength = this.length
    for (var i = 0; i < arraylength; i++){
        var result = callback(this[i], i)
        console.log('result:', result)
    }
    }
var courses = [
    'js',
    'PHP',
    'Ruby'
]
var htmls = courses.map2(function(course){
    return `<h2>${course}<h2>`
})