const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(array){
    var array = sports.filter(function(sports){
        return sports.like > 5;
    })
    return array
}


console.log(getMostFavoriteSport(sports)) 