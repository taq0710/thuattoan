    Array.prototype.filter2 = function(callback){
        var output = []
        for (var index in this) {
            if (this.hasOwnProperty( index)) {
                var result = callback(this[index], index, this)
                if(result){
                    output.push(this[index]);
                }
            }
        }
    }
var courses = [
    {
        name:'javascript',
        coin: 580
    },
    {
        name: 'PHP',
        coin: 680
    },
    {
        name: 'Ruby',
        coin: 780
    }
]
var filterCourses = courses.filter(function(course, index, array){
    console.log(course, index, array)
    // return courses.coin > 700
})
console.log()