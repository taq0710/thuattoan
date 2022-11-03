Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }

        }
    }
    return false
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
var result = courses.some(function (course, index, array) {
    return course.isFinite;
})
console.log(result)