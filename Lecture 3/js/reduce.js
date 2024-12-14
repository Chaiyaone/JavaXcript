const arrayofNumbers = [1,2,3,4];

const sum = arrayofNumbers.reduce((accmulator, currentValue) =>{
    return accmulator + currentValue
})
console.log(sum)
