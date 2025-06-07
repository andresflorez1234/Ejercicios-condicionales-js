// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let letra = "";

readline.question("Ingrese su calificación: ", (calificaciones) => {
    calificaciones = parseFloat(calificaciones);

    if (calificaciones === 10) {
        letra = "A";
    } else if (calificaciones === 9) {
        letra = "B";
    } else if (calificaciones === 8) {
        letra = "C";
    } else if (calificaciones === 7) {
        letra = "D";
    } else if (calificaciones === 6) {
        letra = "D";
    } else {
        letra = "F";
    }

    console.log("La calificación: " + calificaciones + ", letra: " + letra);
    readline.close(); // se cierra el modulo readline para finalizar el programa
});
