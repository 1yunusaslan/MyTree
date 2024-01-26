// const dizi = ["bir", "iki", "dsfds"]; //iterable

// // for(kactanbaslayacak, bitissarti, her_adimda_tekrar_eden_islem){
// //     //işlemlerimiz
// // }

// // for (let index = 0; index < dizi.length; index++) {
// //   dizi[index];
// // }

// const revolver = {
//   power: 50,
// };

// var arthur = {
//   name: "arthur",
//   friends: [],
//   enemies: [],
//   max_hp: 100,
//   hp: 100,
//   power: 20,
//   gun: revolver,
//   armor: 20,
//   dead_number: true,
//   attack_number: 0,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     //enemy.attack(this);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     }
//     // Saldıran kişiyi kontrol et, arkadaş ise uyar,
//     else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     }
//     // Eğer saldırıya devam etmezse saldıran kişi özür diler.
//     else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// var dutch = {
//   name: "dutch",
//   friends: [],
//   max_hp: 10,
//   hp: 85,
//   power: 15,
//   enemies: [messi, arthur, jhon],
//   gun: revolver,
//   armor: 20,
//   dead_number: 1,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     } else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     } else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// var jhon = {
//   name: "jhon",
//   friends: [],
//   enemies: [],
//   max_hp: 120,
//   hp: 120,
//   power: 10,
//   gun: revolver,
//   armor: 20,
//   dead_number: 1,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     } else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     } else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// var messi = {
//   name: "messi",
//   friends: [],
//   enemies: [],
//   max_hp: 100,
//   hp: 5,
//   power: 5,
//   gun: revolver,
//   armor: 20,
//   dead_number: 1,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     } else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     } else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// var ronaldo = {
//   name: "ronaldo",
//   friends: [],
//   enemies: [],
//   max_hp: 100,
//   hp: 85,
//   power: 35,
//   gun: revolver,
//   armor: 20,
//   dead_number: 1,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     } else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     } else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// var yattara = {
//   name: "yattara",
//   friends: [],
//   enemies: [],
//   max_hp: 100,
//   hp: 60,
//   power: 15,
//   gun: revolver,
//   armor: 20,
//   dead_number: 1,
//   greet: function (friend) {
//     console.log("Selam sana " + friend.name);
//     this.friends.push(friend.name);
//   },
//   attack: function (enemy) {
//     enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
//     this.hp = this.hp + this.armor - (enemy.power + enemy.gun.power);
//     if (enemy.hp <= 0 && this.dead_number == true) {
//       console.log(enemy.name + "Öldün");
//       this.dead_number = false;
//     } else if (
//       this.friends.find(function (eleman, index) {
//         return eleman.name == enemy.name;
//       })
//     ) {
//       this.attack_number++;
//       if (this.attack_number == 1) {
//         console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
//       } else if (this.attack_number == 2) {
//         console.log("Seni arkadaşlıktan çıkarıyorum.");
//         this.friends.pop();
//       }
//     } else {
//       enemy.help();
//     }
//   },
//   help: function () {
//     if (this.hp > 0 && this.hp <= 25) {
//       console.log("Yardım edin yaralandım.");
//     }
//   },
// };

// arthur.friends.push(jhon);
// arthur.friends.push(ronaldo);

// dutch.friends.push(messi);
// dutch.friends.push(yattara);

// jhon.friends.push(arthur);
// jhon.friends.push(ronaldo);

// ronaldo.friends.push(arthur);
// ronaldo.friends.push(jhon);
// ronaldo.friends.push(yattara);

// yattara.friends.push(ronaldo);
// yattara.friends.push(dutch);

// arthur.enemies.push(dutch);
// arthur.enemies.push(messi);
// arthur.enemies.push(yattara);

// dutch.enemies.push(messi);
// dutch.enemies.push(jhon);
// dutch.enemies.push(ronaldo);

// jhon.enemies.push(yattara);
// jhon.enemies.push(messi);
// jhon.enemies.push(dutch);

// messi.enemies.push(arthur);
// messi.enemies.push(jhon);
// messi.enemies.push(ronaldo);
// messi.enemies.push(yattara);

// ronaldo.enemies.push(messi);
// ronaldo.enemies.push(dutch);

// arthur.attack(dutch);
// arthur.attack(dutch);

// arthur.attack(jhon);
// arthur.attack(jhon);

// jhon.attack(messi);
// jhon.attack(messi);

// yattara.attack(arthur);
// yattara.attack(arthur);
// yattara.attack(arthur);

// ronaldo.attack(jhon);
// arthur.greet(jhon);

function Charactermaker(name, hp, armor,  power, gunpower ) {
  
  this.name = name;
  this.friends= [];
  this.enemies= [];
  this.hp= hp;
  this.armor=armor;
  this.power=power;
  this.gunpower= gunpower;
  this.dead_number =true;
  this.attack_number=0;
  this.greet=function (friend) {
      console.log(" Selam sana " + friend.name );
      this.friends.push(friend.name);
    };
   this.attack= (enemy) => {
      enemy.hp = enemy.hp + enemy.armor - (this.power + this.gunpower);
      //enemy.attack(this);
      if (enemy.hp <= 0 && this.dead_number == true) {
          console.log(enemy.name + "Öldün");
          this.dead_number = false;
      }
      else if (
            this.friends.find(function (eleman, index) {
            return eleman.name == enemy.name;
               })
             ) {
            this.attack_number++;
            if (this.attack_number == 1) {
              console.log("Seni uyarıyorum ben senin arkadaşınım bana saldırma.");
            } else if (this.attack_number == 2) {
              console.log("Seni arkadaşlıktan çıkarıyorum.");
                this.friends.pop();
            }
            }
            else {
              enemy.help();
            }
          },
   this.help=function () {
        if (this.hp > 0 && this.hp <= 25) {
          console.log("Yardım edin yaralandım.");
        }
      };
   this.allAttackandallHello= (enemy,friend) => {
        for (let i = 0; i < enemy.length; i++) {
            this.attack(enemy[i]);
        }
        for (let j = 0; j <friend.length;j++){
            console.log("Selam sana " + friend[i]);
        } 
      };
  };
     


  
    
    
  


  


const yattarklon = new Charactermaker("yattara", 200, 20,40,10);
const arthur = new Charactermaker("arthur", 500, 20,50,10);
const messi = new Charactermaker("messi", 20, 1,10,10);
const jhon = new Charactermaker("jhon", 120, 10,40,10);
const dutch = new Charactermaker("dutch", 100,30,10,10);
const arthur_friends = [jhon,yattarklon];
arthur.attack(messi);
arthur.friends.push(arthur_friends);


