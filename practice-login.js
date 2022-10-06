//Soal Logic FizzBuzz

function fizzbuzz(param){
    let arr = [];
    for(let i=1; i<=param; i++){ //Looping dulu
        if(i % 3 === 0 && i % 5 === 0){ //Dalam looping buat kondisi
            arr.push(`Fizz Buzz`) //Hasil kondisi masuk ke array kosong
        } else if (i % 3 === 0){
            arr.push(`Fizz`)
        } else if (i % 5 === 0){
            arr.push(`Buzz`)
        } else {
            arr.push(i)
        }
    }

    return arr; //return hasil
}

console.log(fizzbuzz(20)); //mencetak hasil

//Soal Logic Palindrome String

function palindrome(param){
   let char = param.split("");
   let invertChar = char.reverse();

   if (char === invertChar) {
    return true
   } else {
    return false
   }

}

console.log(palindrome(`kasur rusak`));

//Soal Logic Factorial

function Factorial(param){

    let result = 1; 

    for(let i=1; i <= param; i++){
        result *= i;
    }

    return result;
}

function FactorialRecursive(param){
    if(param < 0){
        return `Undefined`;
    } return param <=1 ? 1 : param * FactorialRecursive(param - 1);
}

console.log(Factorial(5));
console.log(FactorialRecursive(-1));
console.log(FactorialRecursive(5));