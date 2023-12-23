x = 5 ;
deneme = document.getElementById("deneme");
deneme.innerHTML = x ;

var x ;

// ilk önce x in içerisine değeri atar sonra x in var olduğunu bildirir.
// yani bir değişken bildirilmeden önce kullanılır.

var a = 3;

deneme1 = document.getElementById("deneme1");
deneme1.innerHTML = a + " " + b ;

var b = 5;

// ilk önce a yı tanımlıyor sonra b yi tanımlıyor.
// a nın içerisine 3 ü atıyor ve sonra ayı ve b yi yazmak istiyor fakat b tanımsız. Çünkü toplama işleminden sonra tanımlanıyor.





name = "Yunus";
//const name;
deneme2 = document.getElementById("deneme2");
deneme2. innerHTML = name;

// const ve let de ise değişkene değer atanır ama sonradan const veya let olduğunu belirttiğinizde hata verir.




// carName = "Saab";
//  let carName = "Volvo";

// bu durumda carname bir değişken olduğu biliniyor fakat let veya const oluncaya kadar kullanılamaz. Referansı yoktur çünkü. Burada let ve const referanstır.