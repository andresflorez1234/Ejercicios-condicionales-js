// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce la cantidad de dinero disponible: ', (dinero) => {
    let dinero_disponible = parseInt(dinero);

    let regalo;

    if (dinero_disponible <= 10000) {
        regalo = "Tarjeta";
    } else if (dinero_disponible >= 11000 && dinero_disponible <= 100000) {
        regalo = "Chocolate";
    } else if (dinero_disponible >= 101000 && dinero_disponible <= 250000) {
        regalo = "Flores";
    } else {
        regalo = "Anillo";
    }

    console.log("Puedes comprar: ", regalo);
    readline.close()// se cierra el modulo readline para finalizar el programa
});