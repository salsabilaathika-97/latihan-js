// Logical Condition

const score = true;
const attendance = false;

const result1 = score || attendance;
const result2 = score && attendance;
const result3= !score || attendance;
const result4 = score && !!attendance;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
