const obj1 = {
    person: 'Anirach',
    weight: 85
}

// const obj2 = obj1
// const obj2 = Object.assign({},obj1)

const obj2 = {...obj1}
obj2.weight = 75
console.log(obj1)
console.log(obj2)