var courses = [
    {
        id:1,
        name: 'Javascript',
        coin: 250
    },
    {
        id:2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id:3,
        name: 'Ruby',
        coin: 300
    },
    {
        id:4,
        name: 'PHP',
        coin: 400
    }
]
var isFree = courses.every(function(course, index){
    return course.coin === 0;
})
console.log(isFree)