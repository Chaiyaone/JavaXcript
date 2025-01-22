function high_Digit(number){
    let high_number = 0
    while(number != 0){
        if(number % 10 > high_number){
            high_number = number % 10
        }
        number /= 10
    }
    return high_number
}
console.log(high_Digit(2))