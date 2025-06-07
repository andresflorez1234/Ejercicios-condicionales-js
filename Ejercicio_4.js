// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombre1, edad1, nombre2, edad2, nombre3, edad3;

readline.question("Ingrese el nombre de la persona 1: ", (n1) => {
    nombre1 = n1;

    readline.question("Ingrese la edad de la persona 1: ", (e1) => {
        edad1 = parseInt(e1);

        readline.question("\nIngrese el nombre de la persona 2: ", (n2) => {
            nombre2 = n2;

            readline.question("Ingrese la edad de la persona 2: ", (e2) => {
                edad2 = parseInt(e2);

                readline.question("\nIngrese el nombre de la persona 3: ", (n3) => {
                    nombre3 = n3;

                    readline.question("Ingrese la edad de la persona 3: ", (e3) => {
                        edad3 = parseInt(e3);

                        let nombre_menor;
                        let edad_menor;

                        if (edad1 <= edad2 && edad1 <= edad3) {
                            nombre_menor = nombre1;
                            edad_menor = edad1;
                        } else if (edad2 <= edad1 && edad2 <= edad3) {
                            nombre_menor = nombre2;
                            edad_menor = edad2;
                        } else {
                            nombre_menor = nombre3;
                            edad_menor = edad3;
                        }

                        console.log(`\nLa persona mas joven es ${nombre_menor} con la edad ${edad_menor} años`);
                        readline.close(); // se cierra el modulo readline para finalizar el programa
                    });
                });
            });
        });
    });
});