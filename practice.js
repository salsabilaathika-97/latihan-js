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
