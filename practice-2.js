// Looping For

let number = [100, 200, 300, 400, 500]

function multiply (number) {
    for (let x=0; x < number.length ; x++) {
       number[x] *= 2;
    }
    return number;
}

console.log(number);
console.log(multiply(number));
