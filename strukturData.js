let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");


let myArrayy = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.push('JavaScript'); //menambah data ke urutan terakhir
console.log(myArrayy);
myArray.pop(); // menghapus data terakhir
console.log(myArrayy);
myArray.shift(); // menghapus data pertama
console.log(myArrayy);
myArray.unshift("Apple"); // menambah data di awal urutan
console.log(myArrayy);
delete myArray[1]; // menghapus data urutan ke 1, urutan diawali dari 0
console.log(myArrayy);
myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArrayy);


const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites, others]; //menggabungkan 2 array menjadi 1 array baru yang terdiri dari 2 array
console.log(favorites);
console.log(...favorites);
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
console.log(allFavorites);
const allFavorites1 = [...favorites, ...others]; // menggabungkan 2 array menjadi 1 array
console.log(allFavorites1);