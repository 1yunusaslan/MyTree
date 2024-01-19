
function QuestionMaker(soru, puan, cevaplar, dogrucevap) {
      this.soru=soru;
      this.secilenShick="";
      this.puan= puan;
      this.cevaplar= cevaplar;
      this.dogrucevap= dogrucevap;
      this.isaretle= function(shick) {
        this.secilenShick = shick;
      };
      this.soruKontrol= function(){
        if(this.secilenShick!== "" && this.secilenShick==this.dogrucevap){
          return true;
        }
        else{
          return false;
        }
      };
  };
  
  const questions = [
    new QuestionMaker("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
    new QuestionMaker("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
    new QuestionMaker("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
    new QuestionMaker("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
    new QuestionMaker("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
    new QuestionMaker("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
    new QuestionMaker("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
    new QuestionMaker("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
    new QuestionMaker("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
    new QuestionMaker("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
    
  ];

  function soruDoldur (questions){
    for (let i = 0; i < questions.length; i++) {
      const soru = questions[i];
      soru.isaretle("B");
    }
  };
  

  function indexSoruyuIsaretle(questions,istenilen){
    for (let j = 0; j < questions.length; j++) {
      if(istenilen==questions[i]){
        const doldur = questions[i];
        doldur.isaretle("A");
      }      
    }
  };
  
function Testyapici(questions){
    this.toplamPuan=0;
    this.butunSorular=questions;
    this.butunSorulariKontrol = function ()  {
        for (let i = 0; i < this.butunSorular.length; i++) {
          const soru =this.butunSorular[i];
          if(soru.soruKontrol()==true){
            this.toplamPuan+=soru.puan;
          }
        }
    };
    this.sonuc=function() {
      if(this.toplamPuan>70){
        console.log("Puanın = " + this.toplamPuan);
        console.log("Gecti.");
      }
      else{
        console.log("Puanın = " + this.toplamPuan);
        console.log("Kaldi.")
      }
    };
  };





  
  
  
soruDoldur(questions);
const testyapici = new Testyapici(questions);
testyapici.butunSorulariKontrol();

const snc =testyapici.sonuc();
console.log(snc);