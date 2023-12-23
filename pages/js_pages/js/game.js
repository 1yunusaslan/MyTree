let arthur = {
    name : "Arthur",
    age : 36,
    gun : "revolver ",
    skill : "Stop the time ",
    wanted_level : 7,
    hunting : 5,
    living_situation : "Dead ",
    greet : function(){
       return this.name +" Selam Ver ";
    },
    sayAge: function(){
       return this.name + " = " + "Benim yaşım " + this.age; 
    },
    sayWho:function (name) {  
       return "Onun adı " + dutch.name;
       
    } 
};

let dutch = {
    name : "Dutch",
    age : 44,
    gun : "pyhton ",
    skill : "Double pyhton ",
    wanted_level : 3,
    hunting : 5,
    living_situation : "Alive ",
    greet : function(){
        return this.name +" Selam Ver ";
    },
    sayAge: function(){
        return this.name + " =  " + "Benim yaşım " + this.age; 
    } 

};

let eroltas= {
    name:"Erol Tas",
    age : 72,
    gun : "nothing ",
    skill : "Theatrical ",
    wanted_level : 0,
    hunting : 0,
    living_situation : "Dead ",
    greet : function(){
        return this.name +" Selam Ver ";
    },
    sayAge: function(){
        return this.name + " =" + "Benim yaşım " + this.age; 
    } 
};



console.log(arthur.greet());
console.log(arthur.sayAge());
console.log(arthur.sayWho());

document.getElementById("arthur").innerHTML = "Yaşı "+ arthur.age + "Silahı " + arthur.gun + "Yeteneği " + arthur.skill + "Aranma seviyesi " + arthur.wanted_level + "Avcılık " + arthur.hunting + "Yaşama Durumu " + arthur.living_situation;
document.getElementById("dutch").innerHTML = "Yaşı "+ dutch.age + "Silahı " + dutch.gun + "Yeteneği " + dutch.skill + "Aranma seviyesi " + dutch.wanted_level + "Avcılık " + dutch.hunting + "Yaşama Durumu " + dutch.living_situation;
document.getElementById("erol").innerHTML = "Yaşı "+ eroltas.age + "Silahı " + eroltas.gun + "Yeteneği " + eroltas.skill + "Aranma seviyesi " + eroltas.wanted_level + "Avcılık " + eroltas.hunting + "Yaşama Durumu " + eroltas.living_situation;