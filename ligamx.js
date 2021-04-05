
var jornada = "";
var newPartidos = [];
var newEstadios = [];
var losPartidos = [];
var estadios = document.getElementsByClassName("estadioM");
var partidos = document.getElementsByClassName("cntPrtdo");
function myfun(){
    jornada = partidos[0].children[0].innerText;
    console.log(jornada);
    for (var cont1 = 0; cont1 < 9; cont1++ ) {
        newPartidos.push(partidos[0].children[0].innerText);//Jornada
        //newPartidos.push("Partido "+cont1+1);//Numero de partido
        newPartidos.push(partidos[cont1].children[1].children[0].innerText);//fecha
        newPartidos.push(partidos[cont1].children[1].children[1].innerText);//hora
           
        newPartidos.push(partidos[cont1].children[2].children[0].children[0].currentSrc);//local
        newPartidos.push(partidos[cont1].children[3].children[1].innerText);//local

        newPartidos.push(partidos[cont1].children[2].children[0].children[1].currentSrc);//visit
        newPartidos.push(partidos[cont1].children[3].children[3].innerText);//visit

        newPartidos.push(estadios[cont1].innerText);
    }
}
console.log(JSON.stringify(newPartidos));

 



