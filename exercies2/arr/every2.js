Array.prototype.every2 = function(callback){
    var output = true
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if(!result){
                output = false
                break;
            }
        }
    }
}
var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinite: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinite: true
    },
    {
        name: 'Java',
        coin: 950,
        isFinite: true
    },
    {
        name: 'SQL',
        coin: 150,
        isFinite: true
    },
    {
        name: 'C++',
        coin: 520,
        isFinite: true
    },
]
var result = courses.every2(function(course, index, array){
    return course.isFinite
})
console.log(result);