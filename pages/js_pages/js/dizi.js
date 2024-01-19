<<<<<<< Updated upstream
let dizi = [ ]
dizi.push("Süleyman");
dizi.push("Ahmet");
dizi.push("Emre");
dizi.push("Amine");
dizi.push("İlhan");
dizi.pop();

/*-
function find(isim,dizi){
    for (let i = 0; i < dizi.length; i++) {
        if(dizi[i]==isim){
            return dizi[i];
        }
        
    }
}

function filter(isim,dizi){
    let y_dizi = [];
    for (let i=0; i<dizi.length; i++ ) {
        if(dizi[i]!==isim){
           y_dizi.push(dizi[i]);
            
        }     
    }
    return y_dizi;
}
*/
let dizi_1 = ["Yunus","Emre","Aslan"];

function map(dizi,call_back){
    for (let i = 0; i < dizi.length; i++) {
        call_back(dizi[i]);  
       
    }
    
}

function console_log (isim) {  
    console.log(isim);

}
const eleman = map(dizi_1,console_log);
console.log(eleman);

=======
let dizi = ["Süleyman", "Ahmet", "Emre", "Amine", "İlhan"];

function XDizi(dizi) {
  this.dizi = dizi;
  this.find = function (isim) {
    for (let i = 0; i < this.dizi.length; i++) {
      if (this.dizi[i] == isim) {
        return dizi[i];
      }
    }
  };
  this.filtrele = function (isim) {
    let y_dizi = [];
    for (let i = 0; i < this.dizi.length; i++) {
      if (this.dizi[i] !== isim) {
        y_dizi.push(dizi[i]);
      }
    }
    return y_dizi;
  };
  this.map = function (call_back) {
    for (let i = 0; i < this.dizi.length; i++) {
      call_back(this.dizi[i]);
    }
  };
  this.console_log = function (isim) {
    console.log(isim);
  };
}

const eleman = map(dizi_1, console_log);
console.log(eleman);

const javascriptdizisi = [1, 2, 3];
const bizimdizi = new XDizi(javascriptdizisi);
function fx(element) {
  console.log(element);
}
bizimdizi.map(fx(element));
>>>>>>> Stashed changes

// const bul_calistir = find();
// const filtrele = filter();
// console.log(bul_calistir);
// console.log(filtrele);

const kare = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 2, 1],
];

function elemanbul(satirnumarasi, sütunnumarası) {
  for (let index = 0; index < kare.length; index++) {
    const row = kare[index];
    for (let j = 0; j < row.length; j++) {}
  }
}

eleman(1);
