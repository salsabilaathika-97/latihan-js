// Looping For

let number = [100, 200, 300, 400, 500]

// function multiply (number) {
//     for (let x=0; x < number.length ; x++) {
//        number[x] *= 2;
//     }
//     return number;
// }

// console.log(number);
// console.log(multiply(number));

const multiple = (arr) => {
    let newData = []
    for (let i=0; i < arr.length ; i++){
        newData.push(arr[i] * 2);
    }
    return newData;
}

const hasil_1 = multiple(number);
console.log(hasil_1);

const car = ['Agya', 'Ayla', 'Sigra', 'Cayla'];

function substract(arr, value) {
    for (let i = 0; i<arr.length;i++){
        const splice = arr.splice(arr[i], value);
        return splice;
    }
}

const hasil_2 = substract(car, 3);
console.log(hasil_2);

const car2 = ['Cayla', 'Agya', 'Ayla', 'Etios', 'Terios'];

const removeCayla = function(arr) {
    let newData = [];
    for(let i = 0; i<arr.length;i++){
        if(arr[i] !== "Cayla"){
            newData.push(arr[i]);
        }
    }
    return newData;
};

const hasil_3 = removeCayla(car2);
console.log(hasil_3);
