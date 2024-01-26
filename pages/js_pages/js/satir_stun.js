const tablo = [
  ["*", 1, 8, 9, 10, 11],
  ["*", 800, 64, 72, 80, 88],
  ["*", 900, 72, 81, 90, 99],
  ["*", 1000, 80, 90, 100, 110],
];

function getIntersection(satirno, sütunno) {
  return tablo[satirno][sütunno];
}

function findItem(target) {
  for (let index = 0; index < tablo.length; index++) {
    const row = tablo[index];

    for (let index = 0; index < row.length; index++) {
      if (row[i] === target) {
        return row[i];
      }
    }
  }
}

const tablo2 = [
  [1, 2, 2, 3, 1],
  [1, 3, 2, 1, 4],
  [2, 4, 3, 4, 1],
  [3, 5, 4, 5, 2],
];

for (let i = 0; i < tablo2.length; i++) {
  const satir = tablo2[i];
  satir.find((eleman) => eleman == satir[sutunindex]);
}

function findValuee() {
  const satir_deger = document.getElementById("satir_number").value;
  const sutun_deger = document.getElementById("sutun_number").value;
  document.getElementById("sonuc").innerHTML = tablo[satir_deger][sutun_deger];
}

//const snc = findValue(satir_deger,sutun_deger);
//console.log(snc);
//document.getElementById("sonuc").innerHTML=snc;

// function sameValue (satirno, sutunno){
//     let sütun = [];
//     let satir = tablo2[satirno]
//     for (let i = 0; i < tablo2.length; i++) {
//         const satir = tablo2[i];
//         sütun.push(satir[sutunno])
//     }

//     for (let i = 0; i < sütun.length; i++) {
//         if(sütun[i] === satir[i]){

//         }
//     }
// }
// const sonuc = sameValue(2);
// console.log(sonuc);

document.getElementById("hesapla").onclick = findValuee;
