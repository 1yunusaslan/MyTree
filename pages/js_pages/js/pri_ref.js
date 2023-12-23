let name = "Yunus";
let age = 22;

let person = {
    name : "Veli",
    age  :  26
};

// name = "yunus", age = 22 ve person stack yapısında tutulur fakat person değişkeni içerisindeki değerler heap yapısında tutulur.
// stack içerisinde bulunan person değişkeni heap içerisinde bulunan değerler ile bağlanır.

// Buradaki amaç stack içerisindeki veri kısa ömürlü ve küçük boyutlarda olduğu için kısa sürede sonucu çıkarır ama heap kısmında verinin boyutu büyük olduğundan çağırılması uzun sürebilir.
// O yüzden stack içerisinde refans bir değişken oluşturup içerisine heap kısmında değerleri atıyoruz. 
// Heap içerisinde bulunan değerler stack içerside bulunan refens değerlerle bağlı olduğundan, stack içerisindeki değerler ile aynı tepkime süresine sahip oluyor.


let myage= 23;
let newage = myage;

newage = newage +1;
console.log(myage);
console.log(newage);





// Burada newage, myage değerini kopyalar fakat newage içerisindeki değer değişikliği myage değerini etkilemez.
// Çünü stack yapısında ikisinin değerleri aynı tutulur. 
// Fakat myage içerisindeki değer değişirse newage içerisindeki değer de değişir çünkü newage içerisindeki değeri myage den alır ama myage içerisindeki değeri newage den almaz.
// Bu sadece stack yapısında geçerlidir.

let kisi = {
    isim : "Ahmet",
    yas : 19
}

let birey = kisi;
birey.yas = 23;

console.log(kisi);
console.log(birey);

// Stack kısmında kisi adında referans bir değişken oluşturuluyor. İçerisindeki değerler heap kısmında. 
// Stack kısmında sonradan birey adında referans değer oluşturuluyor ve kisi değişkeni ile eşitleniyor. 
// Aslında kisi ile değil de heap kısmındaki değerler ile eşitleniyor. O yüzden yas ve isimde değişiklikler yapabilir çünkü kisi referans bir değişken. Asıl değer heap kısmında.
