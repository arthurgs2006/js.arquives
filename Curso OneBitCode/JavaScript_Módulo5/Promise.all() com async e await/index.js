
async function execute(){
    console.time('map')

        const squares = numbers.map(async (number) => {
        await waitFor(2);
        
        return number * number;
        console.timeEnd('map')
    })
    console.log(squares);
}
const numbers = [1, 3, 12, 4, 10, 3];

function waitFor(seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
} 

console.log(squares);
Promise.all(squares).then(results => {
    console.log(results);
})





execute();
