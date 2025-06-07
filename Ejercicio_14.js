// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese su salario: ", (salario) => {
    readline.question("Ingrese sus puntos: ", (puntos) => {
        salario = parseFloat(salario);
        puntos = parseInt(puntos);
        let bono = 0;

        if (puntos >= 0 && puntos <= 100) {
            bono = salario;
        } else if (puntos >= 101 && puntos <= 150) {
            bono = 2 * salario;
        } else if (puntos >= 151) {
            bono = 3 * salario;
        } else {
            bono = 0;
            console.log("Puntuación no válida");
        }

        console.log("El monto del bono que recibirá el profesor es de: $" + bono);
        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
});
