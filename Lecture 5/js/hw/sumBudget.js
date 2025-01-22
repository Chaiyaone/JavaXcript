function getBudgets(info){
    let sum = 0
    info.forEach(person => {
        sum += person.budget 
    })

    return sum
}

console.log(getBudgets([
    { name : "John", age: 21 , budget: 23000},
    { name : "Steve", age: 32 , budget: 40000},
    { name : "Martin", age: 16 , budget: 2700}
]))