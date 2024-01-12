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


// const bul_calistir = find();
// const filtrele = filter();
// console.log(bul_calistir);
// console.log(filtrele);