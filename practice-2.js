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

const fruits = ['Apple', 'Orange', 'Peach'];

const newFruits = [];

for (const fruit of fruits) {
    if (fruit !== 'Apple'){
        newFruits.push(fruit);
    }
}

console.log(newFruits);



const Remove = function () {
    const scores = [100, 90, 70, 80];
    const newData =  [];
    for (score of scores) {
        if (score < 90 && score > 60){
            newData.push(score);
        }
    }
    return newData;
}

const hasil_4 = Remove();
console.log(hasil_4);

const kelas1 = [100, 90, 70, 80];

const between = function(nilaiSiswa){
    let newData = [];
    for (nilai of nilaiSiswa){
        if (nilai > 60 && nilai < 90){
            newData.push(nilai);
        }
    }
    return newData;
}

const nilai1 = between(kelas1);
console.log(nilai1);

const kelas2 = [100, 90, 80];

let newData = [];

kelas2.forEach((nilai, index) => {
    newData.push(`Anak ke ${index + 1} nilainya adalah ${nilai}`)
});

console.log(newData);

const warga = [1991, 1992, 1875, 2004];

function cekUsia(data){
    let dataWarga = [];
    data.forEach((usia) => {
        dataWarga.push(`Usia kelahiran ${usia} tahun ini adalah ${2022 - usia}`)
    });
    return  dataWarga;
}

const hasil_5 = cekUsia(warga);
console.log(hasil_5);




