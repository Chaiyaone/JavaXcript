const array = [15,16,17,18,19]

function reducer(accmulator,currentValue,index){
    const returns = accmulator + currentValue
    console.log(`accumalator: ${accmulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`)
    return returns
}

array.reduce(reducer)