var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(accmulator, currentValue){
    
    return accmulator + currentValue.gold;
}
var totalgold = sports.reduce(getTotalGold, 0)

console.log(totalgold)