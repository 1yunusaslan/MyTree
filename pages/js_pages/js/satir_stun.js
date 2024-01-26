
  const tablo = [
    [1,8,9,10,11],
    [800,64,72,80,88],
    [900,72,81,90,99],
    [1000,80,90,100,110]
    
  ];

  const tablo2 = [
    [1,2,2,3,1],
    [1,3,2,1,4],
    [2,4,3,4,1],
    [3,5,4,5,2]
    
  ];

 
 
  

function findValuee (){
    const satir_deger = document.getElementById("satir_number").value;
    const sutun_deger = document.getElementById("sutun_number").value;
    document.getElementById("sonuc").innerHTML= tablo[satir_deger][sutun_deger];
};

    //const snc = findValue(satir_deger,sutun_deger);
    //console.log(snc);
    //document.getElementById("sonuc").innerHTML=snc;
 







function sameValue (deger){
    for (let i = 0; i < tablo2.length; i++) {
        const satir = tablo2[i];
        for (let k = 0; k < satir.length; k++) {
            const sutun = satir[k];
            if(satir===sutun){
                return deger;
            }
        }
        
    }

}
const sonuc = sameValue(2);
console.log(sonuc);


  document.getElementById("hesapla").onclick = findValuee;