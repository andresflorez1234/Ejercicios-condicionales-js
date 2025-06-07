// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let edad, promedio;

readline.question("Ingrese la edad del estudiante: ", (e) => {
    edad = parseInt(e);

    readline.question("Ingrese el promedio del estudiante: ", (p) => {
        promedio = parseFloat(p);

        if (edad > 18) {
            if (promedio >= 9) {
                console.log("El estudiante recibe una beca de $200000");
            } else if (promedio >= 7.5) {
                console.log("El estudiante recibe una beca de $100000");
            } else if (promedio >= 6.0) {
                console.log("El estudiante recibe una beca de $500000");
            } else {
                console.log("Invitación a estudiar más");
            }
        } else {
            if (promedio >= 9) {
                console.log("El estudiante recibe una beca de $30000");
            } else if (promedio >= 8) {
                console.log("El estudiante recibe una beca de $20000");
            } else if (promedio >= 6) {
                console.log("El estudiante recibe una beca de $10000");
            } else {
                console.log("Invitación a estudiar más");
            }
        }

        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
});
