class Car {
    constructor(ad,yil){
        this.ad = ad;
        this.yil = yil;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.yil;
    }
}


const myCar1 = new Car("MERCEDES",2023);
const myCar2 = new Car("BMW",2020);
document.getElementById("car").innerHTML=myCar1.ad+ " " + myCar1.yil+ "<br>" +
myCar2.ad + " "+ myCar2.yil;
document.getElementById("age").innerHTML=myCar1.ad+ " " + myCar1.age()+" yasinda.";



/*let tarih = new Date();
let yil = tarih.getFullYear();
console.log(yil);*/
