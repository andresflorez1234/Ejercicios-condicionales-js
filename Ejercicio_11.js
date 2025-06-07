// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let costo_por_alumno = 0;

readline.question("Ingrese el numero de alumnos: ", (num_alumnos) => {
    num_alumnos = parseInt(num_alumnos);

    if (num_alumnos >= 100) {
        costo_por_alumno = 20;
    } else if (num_alumnos >= 50 && num_alumnos <= 100) {
        costo_por_alumno = 35;
    } else if (num_alumnos >= 20 && num_alumnos <= 49) {
        costo_por_alumno = 40;
    } else {
        costo_por_alumno = 70;
    }

    console.log("El costo del pasaje por alumno es: $" + costo_por_alumno);
    readline.close(); // se cierra el modulo readline para finalizar el programa
});
