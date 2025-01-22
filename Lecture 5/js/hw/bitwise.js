function bitwiseAND(n1, n2) {
	let numbers = [n1,n2]
    numbers = getBinary(numbers)
    console.log(numbers)
}

function bitwiseOR(n1, n2) {
	
}

function bitwiseXOR(n1, n2) {
	
}

function getBinary(numbers){
    const list_Binary = []
    numbers.forEach(number => {
        let temp_str = ""
        while(number != 0){
            (number % 2 === 0) ? temp_str += "0" : temp_str += "1"
            number = Math.floor(number / 2)
        }
        list_Binary.push(temp_str.reverse)
    });
    return list_Binary
}

//bitwiseAND(6,23)
console.log(getBinary([6,23]))