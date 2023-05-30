let banderas = ["bolivia.png", "peru.png", "albania.png",
"grecia.png", "india.png", "south-korea.png", "ghana.png",
"uganda.png", "australia.png", "islas-cook.png"];

let correcta = [0,1,2,1,1,0,1,0,1,2];

let opciones = [
    ["Bolivia", "Ghana", "Malí"],
    ["Polonia", "Perú", "Indonesia"],
    ["Montenegro", "Austria", "Albania"],
    ["Finlandia", "Grecia", "Islandia"],
    ["India", "Irán", "Irak"],
    ["Corea del Norte", "Corea del Sur", "Taiwán"],
    ["Ghana", "Senegal", "Guinea"],
    ["Mozambique", "Uganda", "Zimbabwe"],
    ["Nueva Zelanda", "Australia", "Fiji"],
    ["Tuvalu", "Islas Marianas", "Islas Cook"],
];

let puntajePorOpcion = [ //cambiar si es que se puede
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

let posActual = 0;
let cantadidAcertada = 0;
let posInciso;
function comenzarJuego(){
    posActual = 0;
    cantadidAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    siguienteBandera();
}

function siguienteBandera(){ //controlamos
    if (banderas.length <= posActual){
        terminarJuego();
    }
    else{
        document.getElementById("imgBandera").src = "imagenes/"+ banderas[posActual];
        document.getElementById("op0").innerHTML = opciones[posActual][0];
        document.getElementById("op1").innerHTML = opciones[posActual][1];
        document.getElementById("op2").innerHTML = opciones[posActual][2];
    }
}

function terminarJuego(){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").textContent =cantadidAcertada;
    document.getElementById("numIncorrectas").textContent =banderas.length-cantadidAcertada;
}

function comprobarRespuesta(posInciso){
    posInciso=posInciso-1;
    cantadidAcertada+=puntajePorOpcion[posActual][posInciso];
    posActual++;
    siguienteBandera();
}

function empezarNew(){
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
}
document.getElementById("op0").addEventListener("click", function () {
    comprobarRespuesta(1);
});
document.getElementById("op1").addEventListener("click", function () {
    comprobarRespuesta(2);
});
document.getElementById("op2").addEventListener("click", function () {
    comprobarRespuesta(3)
});

document.getElementById("ini").addEventListener("click", function () {
    empezarNew();
});