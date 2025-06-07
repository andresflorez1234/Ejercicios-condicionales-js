// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let costo_base = 0;

readline.question("Ingrese el tipo de póliza (A para cobertura amplia, B para daños a terceros): ", (tipo_poliza) => {
    if (tipo_poliza === 'A') {
        costo_base = 1200;
    } else {
        costo_base = 950;
    }

    readline.question("¿Has bebido alcohol? (Sí/No): ", (alcohol) => {
        if (alcohol === 'Sí') {
            costo_base = costo_base + (costo_base * 0.10);
        }

        readline.question("¿Utilizas lentes? (Sí/No): ", (lentes) => {
            if (lentes === 'Sí') {
                costo_base = costo_base + (costo_base * 0.05);
            }

            readline.question("¿Tienes alguna deficiencia cardiaca o diabetes? (Sí/No): ", (enfermedad) => {
                if (enfermedad === 'Sí') {
                    costo_base = costo_base + (costo_base * 0.05);
                }

                readline.question("¿Qué edad tienes?: ", (edad) => {
                    if (parseInt(edad) > 40) {
                        costo_base = costo_base + (costo_base * 0.20);
                    } else {
                        costo_base = costo_base + (costo_base * 0.10);
                    }

                    console.log("El costo total de la póliza es: $" + costo_base);
                    readline.close(); // se cierra el modulo readline para finalizar el programa
                });
            });
        });
    });
});