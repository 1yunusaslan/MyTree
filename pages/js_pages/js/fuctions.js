// Declaration 

let a = 3;
let b = 2;


function myFunciton(){
    return a*b;   
}
console.log(myFunciton(a,b));


//Parameters and Arguments

const deneme = function(c,y){return c*y}
let x = deneme(3,4);
document.getElementById("deneme1").innerHTML = x;

function myF (x, z = 2){
    return x+z;
}
console.log(myF(5));
// console.log(window.myF(5));




// Anonymous and Return

let toplama = function (h,j) {
    return h+j;  
}
let sonuc = toplama(10,11);
console.log(sonuc);

let cikarma = (k,l) => k-l;
let sonuc2= cikarma(15,3);
console.log(sonuc2);


// This and Method 

let kisi = {
    ad: "Yunus",
    soyad : "Aslan",
    fullname: function() {
        return this.ad + " " + this.soyad;
    }
};

document.getElementById("fullname").innerHTML=kisi.fullname();

// OBJ Property 

let person = {
    name : "Ahmet",
    surname : "Arslan",
    fName: function() {
        return person.name + " " + person.surname;
        //return person["name"] + " " + person["surname"];
        
    }

}

person.eyescolor= "Brown";
document.getElementById("person").innerHTML= person.name + " " + person.eyescolor;

