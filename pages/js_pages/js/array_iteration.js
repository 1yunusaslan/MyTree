//ForEach

const numbers = [1,2,10,20,40,50,70,100,110,116];

let text = "";
numbers.forEach(writeValue);
document.getElementById("numbers").innerHTML = text;
function writeValue(value,index) {
  text += value + "<br>";
   
}
console.log(numbers);

//Map

// const numbers_carp= numbers.map(numbersCarp);
// //document.getElementById("numbers2").innerHTML = numbers_carp;
// function numbersCarp (value) { 
//     return value*2;
// }

//console.log(numbers_carp);

//Filter


const numbers_filter= numbers.filter(numbersFilter);
//document.getElementById("numbers3").innerHTML = numbers_filter;
function numbersFilter (value) { 
    return value < 110;
}
console.log(numbers_filter);

//Reduce**** ( tek bir değer döndürür, her bir dizi öğesi üzerinde çalışır.)

const numbers_sum= numbers.reduce(numbersSum);
function numbersSum (total,value) {  
    return total + value;
}
console.log(numbers_sum);

//Every (Burayı sor)

const numbers2 = [11,21,12,20,40,50,70,100,110,116];
const numbers_every = numbers2.every(myEvery);

function myEvery(value) {  
    return value > 10 ;
}
console.log(numbers_every);

//Some (Burayı sor)

const numbers_some = numbers2.some(mySome);

function mySome(value) {  
    return value > 10 ;
}
console.log(numbers_some);

//From

const make_array = Array.from("123456789");
console.log(make_array);

//Key

const fruits = ["Elma","Armut","Mandalina","Limon","Kiraz"];
const fruits_key = fruits.keys();

let txt = "";
for(let x of fruits_key){
    txt += x + "<br>";
}
console.log(txt);

//Entries 

const fruits_entries = fruits.entries();
for(let y of fruits_entries){
    console.log(y += fruits_entries+"<br>");
};

//With

const fruits_with = fruits.with(1,"Armutlar");
console.log(fruits_with);

//Spread******** 

const s1= [1,2,3,4];
const s2= [5,6,7,8];
const s3= [9,10,11,12];

const sayilar = [...s1, ...s2, ...s3];
console.log(sayilar);





