let value1 = ['Apple',1,false]
let value2 = ['Fries',2,true]
let value3 = ['Mars',9,'Apple']
const values = value1.concat(value2).concat(value3)
const duplicates = values.filter((item, index) => values.indexOf(item) !== index);

console.log(duplicates)