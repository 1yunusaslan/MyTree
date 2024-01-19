// 10 soruluk bir test
// her soru 10 puan
// geçme notu 70
// test factory, question factory
// her sorunun sorusu, her soru cevap şıkları, doğru cevabı ve işaretle methodu(şık seçimi)
// test objesi soruların hepsini teker teker kontrol edip puanı hesaplar
// eğer geçme notunun üzerinde puan aldıysa tebrikler almamışsa wasted!

function QuestionMaker(soru, puan, cevaplar, dogrucevap) {
      this.soru=soru;
      this.secilenShick="",
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
    QuestionMaker("2+2", 10, ["A=1", "B=2", "C=3", "D=4"], "D"),
    QuestionMaker("4+4", 10, ["A=2", "B=4", "C=8", "D=12"], "B"),
    QuestionMaker("5+5", 10, ["A=3", "B=9", "C=10", "D=12"], "A"),
    QuestionMaker("6+6", 10, ["A=12", "B=6", "C=3", "D=1"], "C"),
    QuestionMaker("7+7", 10, ["A=16", "B=14", "C=18", "D=22"], "A"),
    QuestionMaker("8+8", 10, ["A=12", "B=24", "C=19", "D=16"], "D"),
    QuestionMaker("9+9", 10, ["A=122", "B=2", "C=18", "D=12"], "C"),
    QuestionMaker("10+10", 10, ["A=20", "B=14", "C=38", "D=42"], "B"),
    QuestionMaker("11+11", 10, ["A=32", "B=42", "C=2", "D=22"], "B"),
    QuestionMaker("12+12", 10, ["A=22", "B=23", "C=24", "D=25"], "B"),
    
  ];

  function soruDoldur (questions){
    for (let i = 0; i < questions.length; i++) {
      const doldur = questions[i];
      doldur. QuestionMaker.isaretle("B");
    }
    // doldur mu yoksa question mı ?
    return questions;
  }
  
  const testYapici = {
    toplamPuan:0,
    butunSorular:[questions],
    butunSorulariKontrol: function ()  {
        for (let i = 0; i < this.butunSorular.length; i++) {
          const bSorular = butunSorular[i];
          if(bSorular.soruKontrol()==true){
            toplamPuan+=bSorular.puan;
          }
        }
    },
    sonuc: function () {
      if(this.toplamPuan>70){
        console.log("Gecti.");
      }
      else{
        console.log("Kaldi.")
      }
    }
  }

  
  
  
soruDoldur(questions);
butunSorulariKontrol();
sonuc();
