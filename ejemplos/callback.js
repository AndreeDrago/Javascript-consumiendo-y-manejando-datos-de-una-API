
//Formas de escribir funciones//
// Funciones generales//
function dos () {
    console.log("dos")
}

function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000);
}

setTimeout(() => uno(dos), 5000);

//Funciones a partír de una variable, función sin nombre//
const nombre = function () {
    console.log('nombre');
}

nombre();

//Función reducida, solo con una linea de acción//
const persona = () => console.log('Barbara');

persona();



