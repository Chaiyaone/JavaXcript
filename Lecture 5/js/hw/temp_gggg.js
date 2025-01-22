function totalVolume(...number){
    let total = 0
    number.forEach(element => {
        let sum = 1
        element.forEach(x =>{
            sum = sum * x
        })
        total += sum
    })
    console.log(total)
}


totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])