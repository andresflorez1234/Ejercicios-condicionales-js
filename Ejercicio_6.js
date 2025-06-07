// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let antiguedad, sueldo, bono_antiguedad, bono_sueldo, bono_mayor, tipo_bono;

readline.question("Ingrese los años de antigüedad: ", (a) => {
    antiguedad = parseInt(a);

    readline.question("Ingrese su sueldo: ", (s) => {
        sueldo = parseFloat(s);

        if (antiguedad > 2 && antiguedad < 5) {
            bono_antiguedad = 0.2 * sueldo;
        } else if (antiguedad >= 5) {
            bono_antiguedad = 0.3 * sueldo;
        } else {
            bono_antiguedad = 0;
        }

        if (sueldo < 1000) {
            bono_sueldo = 0.25 * sueldo;
        } else if (sueldo > 1000 && sueldo <= 3500) {
            bono_sueldo = 0.15 * sueldo;
        } else {
            bono_sueldo = 0.1 * sueldo;
        }

        if (bono_antiguedad > bono_sueldo) {
            bono_mayor = bono_antiguedad;
            tipo_bono = "antigüedad";
        } else {
            bono_mayor = bono_sueldo;
            tipo_bono = "sueldo";
        }

        console.log(`El bono a recibir por ${tipo_bono} es: $${bono_mayor}`);
        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
});