// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//La sintaxis (respuesta) => { ... } define una función anónima que recibe un parámetro 
// llamado respuesta y ejecuta el código que esté dentro de las llaves { }.
readline.question("Ingrese los años de servicio: ", (respuesta) => {
    let años_servicio = parseInt(respuesta);
    let bono = 0;

    if (años_servicio === 1) {
        bono = 100;
    } else if (años_servicio === 2) {
        bono = 200;
    } else if (años_servicio === 3) {
        bono = 300;
    } else if (años_servicio === 4) {
        bono = 400;
    } else if (años_servicio === 5) {
        bono = 500;
    } else {
        bono = 1000;
    }

    console.log("El bono por antigüedad para " + años_servicio + " años de servicio es: $" + bono);
    readline.close(); // se cierra el modulo readline para finalizar el programa
});
