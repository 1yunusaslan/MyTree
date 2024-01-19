<<<<<<< Updated upstream
// 10 soruluk bir test
// her soru 10 puan
// geçme notu 70
// test factory, question factory
// her sorunun sorusu, her soru cevap şıkları, doğru cevabı ve işaretle methodu(şık seçimi)
// test objesi soruların hepsini teker teker kontrol edip puanı hesaplar
// eğer geçme notunun üzerinde puan aldıysa tebrikler almamışsa wasted!

function questionMaker(soru, puan, cevaplar, dogrucevap) {
  return {
    soru: soru,
    secilenShick: "",
    puan: puan,
    cevaplar: cevaplar,
    dogrucevap: dogrucevap,
    isaretle: function (shick) {
      this.secilenShick = shick;
    },
    soruKontrol: function () {
      if (this.secilenShick !== "" && this.secilenShick == this.dogrucevap) {
        return true;
      } else {
        return false;
      }
    },
=======
function Question(soru, puan, cevaplar, dogrucevap) {
  this.soru = soru;
  this.secilenShick = "";
  this.puan = puan;
  this.cevaplar = cevaplar;
  this.dogrucevap = dogrucevap;
  this.isaretle = function (shick) {
    this.secilenShick = shick;
  };
  this.soruKontrol = function () {
    if (this.secilenShick !== "" && this.secilenShick == this.dogrucevap) {
      return true;
    } else {
      return false;
    }
  };
}

function Test(questions) {
  this.toplamPuan = 0;
  this.butunSorular = questions;
  this.butunSorulariKontrol = function () {
    for (let i = 0; i < this.butunSorular.length; i++) {
      const soru = this.butunSorular[i];
      if (soru.soruKontrol() == true) {
        this.toplamPuan += soru.puan;
      }
    }
  };
  this.sonuc = function () {
    if (this.toplamPuan > 70) {
      console.log("Puanın = " + this.toplamPuan);
      console.log("Gecti.");
    } else {
      console.log("Puanın = " + this.toplamPuan);
      console.log("Kaldi.");
    }
  };
}

function Ogrenci() {
  orencitip = "sayisal";
  this.testCoz = function (test) {
    for (let i = 0; i < test.butunSorular.length; i++) {
      const soru = test.butunSorular[i];
      this.soruCoz(soru, "B");
    }
>>>>>>> Stashed changes
  };
}

<<<<<<< Updated upstream
const turkceSorular = [
  questionMaker("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
  questionMaker("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
  questionMaker("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
  questionMaker("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
  questionMaker("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
  questionMaker("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
  questionMaker("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
  questionMaker("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
  questionMaker("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
  questionMaker("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
];

const matematikSorulari = [
  questionMaker("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
  questionMaker("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
  questionMaker("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
  questionMaker("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
  questionMaker("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
  questionMaker("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
  questionMaker("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
  questionMaker("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
  questionMaker("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
  questionMaker("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
];

function soruDoldur(questions) {
  for (let i = 0; i < questions.length; i++) {
    const doldur = questions[i];
    doldur.isaretle("B");
  }
  // doldur mu yoksa question mı ?
  return questions;
}

const testYapici = {
  toplamPuan: 0,
  butunSorular: turkceSorular,
  butunSorulariKontrol: function () {
    for (let i = 0; i < this.butunSorular.length; i++) {
      const soru = this.butunSorular[i];
      if (soru.soruKontrol() == true) {
        this.toplamPuan += soru.puan;
      }
    }
  },
  sonuc: function () {
    if (this.toplamPuan > 70) {
      console.log("Gecti.");
    } else {
      console.log("Kaldi.");
    }
  },
};

const srDoldur = soruDoldur(questions);
// const srKontrol = soruKontrol(srDoldur);
testYapici.butunSorulariKontrol();
const sonuc = testYapici.sonuc();
console.log(sonuc);
=======
  this.soruCoz = function (question, shick) {
    question.isaretle(shick);
  };
}

// function soruDoldur(questions) {}

// function indexSoruyuIsaretle(questions, istenilen) {
//   questions[istenilen].isaretle("a");

//   // for (let j = 0; j < questions.length; j++) {
//   //   if (istenilen == questions[i]) {
//   //     const doldur = questions[i];
//   //     doldur.isaretle("A");
//   //   }
//   // }
// }

const questions = [
  new Question("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
  new Question("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
  new Question("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
  new Question("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
  new Question("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
  new Question("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
  new Question("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
  new Question("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
  new Question("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
  new Question("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
];

const turkcesorulari = [
  new Question("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
  new Question("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
  new Question("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
  new Question("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
  new Question("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
  new Question("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
  new Question("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
  new Question("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
  new Question("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
  new Question("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
];

// const normaldegisken = 1;

// function fonkisyon(fonksiyonparametre) {
//   console.log(fonksiyonparametre);
// }

// fonkisyon(normaldegisken);

// soruDoldur(questions);

// testyapici.butunSorulariKontrol();

// const snc = testyapici.sonuc();
// console.log(snc);
const matematiktesti = new Test(questions);
const turkctest = new Test(turkcesorulari);
const yunus = new Ogrenci();

yunus.testCoz(turkctest); // yunus görevini yaptı
test.butunSorulariKontrol();
const not = test.sonuc();

console.log(not);
>>>>>>> Stashed changes
