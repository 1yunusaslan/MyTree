//Concat

const array_1 = ["Yunus","Emre","Aslan"];
const array_2 = ["İlhan","Aslan"];
const array_3 = ["Ali", "Aslan"];
const array_4 = [["Ali","Fatma","Amine"], "Aslan"];
const combination_1 = array_1.concat(array_2);
const combination_2 = array_1.concat(array_2,array_3);
const combination_3 = array_1.concat(array_2,array_4);
const combination_4 = array_3.concat(array_1,array_2);
console.log(combination_1);
console.log(combination_2);
console.log(combination_3);
console.log(combination_4);

//Splice 

const city = ["İstanbul","Ankara","Trabzon","Rize","Konya"];
const city_2 = ["İstanbul","Ankara","Trabzon","Rize","Konya"];
city.splice(2,2);
city_2.splice(2,0,"Isparta","Düzce");
console.log(city);
console.log(city_2);

//Flat 

const numbers = [1,2,[3,4], [5,6[7,8,9]]];
const newarray_1 = numbers.flat();
const newarray_2 = numbers.flat(2);// Derinlik vermek için. 0-1-2
console.log(newarray_1); 
console.log(newarray_2); 

//Slice 

const fruits = ["Elma","Armut","Mandalina","Limon","Kiraz"];
const newfruits_1 = fruits.slice(2,4);
const newfruits_2 = fruits.slice(-4,-2);
console.log(newfruits_1);
console.log(newfruits_2);

