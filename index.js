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