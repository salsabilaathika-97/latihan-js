// Logical Condition

const score = true;
const attendance = false;
const attitude = false;

const result1 = score || attendance;
const result2 = score && attendance;
const result3= !score || attendance;
const result4 = score && !!attendance;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// If Condition

const total_score = false;
const total_attendance = false;

if (total_score && total_attendance) {
    console.log("Lulus");
} else if (total_score && !total_attendance) {
    console.log("Lulus Bersyarat");
} else {
    console.log("Tidak Lulus");
}

const number = 15;
const Condition1 = number % 5 == 0;
const Condition2 = number % 3 == 0;

if (Condition1 && Condition2) {
    console.log("Fizz Buzz")
} else if (number % 3 == 0 ) {
    console.log("Fizz")
} else if (number % 5 == 0) {
    console.log("Buzz")
} else {
    console.log(number);
}

// switch case

const job = "teacher";

switch (job) {
    case "teacher" :
        console.log("teach");
        break;
    case "doctor" :
        console.log("cure");
    case "programmer" :
        console.log("code");
    default:
        console.log("others")
        break;
}

// ternary operation

const nilai = 80;

const status_kelulusan = nilai >= 80 ? "Lulus" : "Tidak Lulus";

console.log(status_kelulusan);

// function

function Name(name, age) {
    const result = `Namanya adalah ${name} dan usianya ${age}`;
    return result;
}

const Bob = Name("Bob", 27);
console.log(Bob);

function FizzBuzz(number){
    const Condition1 = number % 3 == 0;
    const Condition2 = number % 5 == 0;
    
    if (Condition1 && Condition2) {
        console.log("Fizz Buzz")
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

FizzBuzz(3);
FizzBuzz(5);
FizzBuzz(15);

function fizzbuzz(number){
    let result = "";

    if ((number % 3 == 0) && (number % 5 == 0)) {
        result = `Fizz Buzz`;
        return result;
    } else if (number % 3 == 0) {
        result = `Fizz`;
        return result;
    } else if (number % 5 == 0) {
        result = `Buzz`;
        return result;
    } else {
        result = number;
        return result;
    }
}

const case_1 = fizzbuzz(3);
console.log(case_1);
const case_2 = fizzbuzz(5);
console.log(case_2);
const case_3 = fizzbuzz(15);
console.log(case_3);