const countingSheep = function(num) {
    if(num === 0){
        return 'All sheep jumped over the fence'
    }

    return `${num}: Another sheep jumps over the fence \n` + countingSheep(num-1)
}

console.log(countingSheep(3))