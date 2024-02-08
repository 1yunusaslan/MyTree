const tablo2 = [
  [800,	1.02,1.89,2.77,3.64],
  [900,	1.13,2.11,3.09,4.07],
  [1000,1.24,2.33,3.41,4.50],
  [1100,1.34,2.54,3.74,4.94]

  
  ];
  
  
  function findValue() {
    const satir_deger = document.getElementById("satir_number").value;
    const sutun_deger = document.getElementById("sutun_number").value;
    document.getElementById("sonuc").innerHTML = tablo2[satir_deger-1][sutun_deger-1];
    
  }


  document.getElementById("hesapla").onclick = findValue;