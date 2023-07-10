
function fatorial(num) {
    let fat = 1 
    for (c= num; c > 1; c--) {
        fat *= c
    }
    return fat

}

console.log(fatorial(5))