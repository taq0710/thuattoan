function run(object){
    var arr = []
    for(var key in object){
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return arr
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));