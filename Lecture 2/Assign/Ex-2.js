function equation(expression){
    let total = Number(expression[0])
    let Operator = null
    for(let n = 1; n < expression.length ; n++){
        if("+-*/".includes(expression[n]))
            Operator = expression[n];
        else{
            const currentNumber = Number(expression[n])
            switch(Operator){
                case "+":
                    total += currentNumber
                    break
                case "-":
                    total -= currentNumber
                    break
                case "*":
                    total *= currentNumber
                    break
                case "/":
                    total /= currentNumber
                    break
            }
        }
    }
    return total
}

//console.log(equation("1+1"))
console.log(equation("9-3/3"))