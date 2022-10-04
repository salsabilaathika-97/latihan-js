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