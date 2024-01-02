let dizi = [ ]
dizi.push("Yunus Emre");
dizi.push("Ahmet");
dizi.push("Emre");
dizi.push("Amine");
dizi.push("İlhan");
dizi.pop();

/*
function delete_eleman(){
    let yeni_dizi=[];
    for (let index = 0; index < dizi.length; index++) {
           if (dizi[index]=="Ahmet"){
                
           }
    }
}
*/

function eleman_bul(){
    
    for (let index = 0; index < dizi.length; index++) {
           if (dizi[index]=="Ahmet"){
                return dizi[index];
           }
    }
    
}

const ahmet = eleman_bul();
console.log(ahmet);