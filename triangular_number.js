function triangular_number(num){
    if(num === 1){
        return num
    }

    return num + triangular_number(num-1)
}

console.log(triangular_number(5))
console.log(triangular_number(10))