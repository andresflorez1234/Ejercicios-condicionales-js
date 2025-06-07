// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese un número del 1 al 7: ", (numero) => {
    numero = parseInt(numero);

    if (numero === 1) {
        console.log("Lunes");
    } else if (numero === 2) {
        console.log("Martes");
    } else if (numero === 3) {
        console.log("Miércoles");
    } else if (numero === 4) {
        console.log("Jueves");
    } else if (numero === 5) {
        console.log("Viernes");
    } else if (numero === 6) {
        console.log("Sábado");
    } else if (numero === 7) {
        console.log("Domingo");
    } else {
        console.log("Número incorrecto, ingrese un número del 1 al 7");
    }

    readline.close(); // se cierra el modulo readline para finalizar el programa
});
