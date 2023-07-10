let num = [5 , 8 , 2 , 9 ,3]
num[5] = 9
num[6] = 10
num.push(3)
console.log(num)
console.log(num.length)
console.log(num.sort())//COLOCAR EM ORDEM CRESCENTE

for (let pos=0; pos <num.length ; pos++) {
    console.log(pos)
    console.log(`${num[pos]}`)
}

for(let pos1 in num) {
    console.log(`A posição ${pos1} tem valor ${num[pos1]}`)
   
}
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)