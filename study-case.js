const x = prompt("Input angka 1: ");
const y = prompt("Input angka 2: ");
window.alert("Bilangan kuadrat dari angka 1: " + Math.pow(x,2));
console.log(Math.pow(x,2));
window.alert("Pembagian antara angka 1 dan angka 2: "+ x / y);
console.log(x / y);

const tanggal = new Date();
console.log(tanggal.toDateString());

const kemarin = new Date(tanggal);
kemarin.setDate(kemarin.getDate() - 1);
console.log(kemarin.toDateString());

const besok = new Date(tanggal);
besok.setDate(besok.getDate() + 1);
console.log(besok.toDateString());

const kata = prompt("Input kata: ");
window.alert("Jumlah karakter ada: " + kata.length);
console.log(kata.length);
