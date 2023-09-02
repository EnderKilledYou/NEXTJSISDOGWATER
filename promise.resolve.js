


const maxIteration = Math.pow(2,3);
let iteration = 0;
var currentValue = 0;

console.time("promise.resolve")

while(iteration < maxIteration){
    Promise.resolve().then(()=>{
        currentValue = currentValue + 1;

    })
    iteration= iteration + 1;

}

console.timeEnd("promise.resolve")