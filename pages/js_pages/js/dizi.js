let dizi = ["Süleyman","Ahmet","Emre","Amine","İlhan" ]



function XDizi(dizi) { 
    this.dizi=dizi;
    this.find = function (isim,dizi){
        for (let i = 0; i < dizi.length; i++) {
            if(dizi[i]==isim){
                return dizi[i];
            }
            
        }
    };
    this.filtrele=function(isim,dizi){
        let y_dizi = [];
        for (let i=0; i<dizi.length; i++ ) {
            if(dizi[i]!==isim){
               y_dizi.push(dizi[i]);
                
            }     
        }
        return y_dizi;
    };
    this.map =function(dizi,call_back){
        for (let i = 0; i < dizi.length; i++) {
            call_back(dizi[i]);  
           
        }
        
    };
   this.console_log= function(isim) {  
        console.log(isim); 
    }



 };

const eleman = map(dizi_1,console_log);
console.log(eleman);


XDizi.find();



// const bul_calistir = find();
// const filtrele = filter();
// console.log(bul_calistir);
// console.log(filtrele);