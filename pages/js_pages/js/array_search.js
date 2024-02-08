//IndexOf 

const fruits = ["Elma","Armut","Mandalina","Limon","Kiraz"];
let position_fruit= fruits.indexOf("Elma");
console.log(position_fruit);


//LastIndexOf

const fruits_2 = ["Elma","Armut","Armut","Mandalina","Ayva","Limon","Kiraz"];
let position_fruit_2= fruits_2.lastIndexOf("Elma");
console.log(position_fruit_2);

//Includes

const fruits_3 = ["Elma","Armut","Mandalina","Limon","Kiraz"];
let check = fruits_3.includes("Elma");
let check_2 = fruits_3.includes("El");
console.log(check);
console.log(check_2);

//Find

const numbers = [1,2,10,20,40,50,70,100,110,116];
let find_number = numbers.find(findFunction);

function findFunction(value) {

    return value > 40;
}
console.log(find_number);


const numbers_2 = [1,2,10,20,40,50,70,100,110,116];
let find_number_2 = numbers_2.findIndex(findNumberIndex);

function findNumberIndex(value) {

    return value > 40;
}
console.log(find_number_2);
