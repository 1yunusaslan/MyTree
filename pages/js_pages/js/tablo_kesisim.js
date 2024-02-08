const tablo2 = [
  [800, 1.02, 1.89, 2.77, 3.64],
  [900, 1.13, 2.11, 3.09, 4.07],
  [1000, 1.24, 2.33, 3.41, 4.5],
  [1100, 1.34, 2.54, 3.74, 4.94],
];

function getSatir(satirno) {
  return tablo2.find((satir) => satir[0] == satirno);
}

function findValue() {
  const satir_deger = document.getElementById("satir_number").value;
  const sutun_deger = document.getElementById("sutun_number").value;
  const numberSatir = Number(satir_deger);
  const numberSutun = Number(sutun_deger);
  const satir = getSatir(numberSatir);

  if (numberSatir === undefined) {
    document.getElementById("sonuc").innerHTML =
      "Geçersiz bir satır numarası girdiniz, tekrar deneyin";
  } else {
    document.getElementById("sonuc").innerHTML = satir[numberSutun];
  }

  if (numberSutun > satir.length || numberSutun === 0) {
    document.getElementById("sonuc").innerHTML =
      "Geçersiz bir sütun numarası girdiniz, tekrar deneyin";
  } else {
    document.getElementById("sonuc").innerHTML = satir[numberSutun];
  }
}

document.getElementById("hesapla").onclick = findValue;
