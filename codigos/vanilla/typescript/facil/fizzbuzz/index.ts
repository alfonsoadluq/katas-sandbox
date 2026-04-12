const MIN = 1, MAX = 100;

for(let i = MIN; i <= MAX; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);   
}