const mac =  {
    gs_skor : 0,
    b_skor :0
}
const mes = {
    name : "messi"
}
const galatasaray = {
    team_name : "Galatasaray"
}

const barcelona = {
    team_name : "Barcelona"
}

function myF(){
    for (let i = 0; i<61; i++) {
        mac.gs_skor=mac.gs_skor+1;
        console.log(mes.name+ " Kendi kalesine gol attı. Skor: "+ galatasaray.team_name + ":" + mac.gs_skor + " " + barcelona.team_name + ":" + mac.b_skor);
    }
}


console.log(myF());