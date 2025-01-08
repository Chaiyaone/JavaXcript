function sumEvenNumbers(start,end){
    let sum = 0
    for(let i = start ; i <= end ; i++) (i % 2 === 0) ? sum += i : {} ;
    return sum
}
console.log(sumEvenNumbers(1,10))