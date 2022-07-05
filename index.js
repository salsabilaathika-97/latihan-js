const x = "Apa Kabar";

console.log(x.length);
console.log(x.indexOf('Dunia'));
console.log(x.substr(5,3));
console.log(x.slice(5,8));
console.log(x.split(' '));

const a = 'Apa';
const b = 'KABAR';
const c = 12345;

console.log(a.toUpperCase());
console.log(b.toLowerCase());
console.log(a.replace('pa','mi'));
console.log(a.replace(/pa/g, 'mi'));
console.log(typeof(c.toString()));

var usiaAyah = 60;
var usiaBunda = 45;

console.log(usiaAyah * usiaBunda);
console.log(usiaAyah / usiaBunda);
console.log(usiaAyah + usiaBunda);
console.log(usiaAyah - usiaBunda);
console.log(usiaAyah % usiaBunda);

console.log(Math.PI);
console.log(Math.abs(-4.7));
console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.cbrt(8));

let time = new Date();
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());