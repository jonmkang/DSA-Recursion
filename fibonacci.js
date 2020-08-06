function fibonacci(num){
    if(num === 1){
        return num
    }

    return num + fibonacci(num-1)
}

console.log(fibonacci(5))