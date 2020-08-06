function string_splitter(string, num=0){

    if(string[num] === '/'){
        return [string.slice(0, num)] + [string_splitter(string.slice(num+1, -1), num+1)]
    }

    if(string.length === num + 1){
        
    }

    return string_splitter(string, num+1)
}

console.log(string_splitter('02/02/2020'))