const dizi = ["bir", "iki", "dsfds"]; //iterable

// for(kactanbaslayacak, bitissarti, her_adimda_tekrar_eden_islem){
//     //işlemlerimiz
// }

// for (let index = 0; index < dizi.length; index++) {
//   dizi[index];
// }

const revolver = {
  power: 50,
};

var arthur = {
  name: "arthur",
  friends: [],
  enemies: [],
  max_hp: 100,
  hp: 100,
  power: 20,
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    // buraya iyi bak.
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun.power);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else if (
      this.friends.find(function (eleman, index) {
        return eleman.name === enemy.name;
      })
    ) {
      console.log("Saldıramam o benim arkadaşım.");
    } else {
      enemy.help();
    }

    /*
    else if (this.friends.name==enemy.name){
      this.friends.
    }
    */
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};

var dutch = {
  name: "dutch",
  friends: [],
  max_hp: 10,
  hp: 85,
  power: 15,
  enemies: [messi, arthur, jhon],
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else {
      enemy.help();
    }
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};

var jhon = {
  name: "jhon",
  friends: [],
  enemies: [],
  max_hp: 120,
  hp: 120,
  power: 10,
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else {
      enemy.help();
    }
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};

var messi = {
  name: "messi",
  friends: [],
  enemies: [],
  max_hp: 100,
  hp: 5,
  power: 5,
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else {
      enemy.help();
    }
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};

var ronaldo = {
  name: "ronaldo",
  friends: [],
  enemies: [],
  max_hp: 100,
  hp: 85,
  power: 35,
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else {
      enemy.help();
    }
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};

var yattara = {
  name: "yattara",
  friends: [],
  enemies: [],
  max_hp: 100,
  hp: 60,
  power: 15,
  gun: revolver,
  armor: 20,
  greet: function (friend) {
    console.log("Selam sana " + friend.name);
    this.friends.push(friend.name);
  },
  attack: function (enemy) {
    enemy.hp = enemy.hp + enemy.armor - (this.power + this.gun);
    if (enemy.hp <= 0) {
      console.log(enemy.name + "Öldün");
    } else {
      enemy.help();
    }
  },
  help: function () {
    if (this.hp > 0 && this.hp <= 25) {
      console.log("Yardım edin yaralandım.");
    }
  },
};
arthur.friends.push(jhon);
arthur.friends.push(ronaldo);

arthur.attack(dutch);

jhon.attack(messi);
arthur.attack(dutch);
jhon.attack(messi);
yattara.attack(arthur);
yattara.attack(arthur);
yattara.attack(arthur);
ronaldo.attack(jhon);
arthur.greet(jhon);
