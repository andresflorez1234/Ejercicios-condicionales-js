// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el dinero recibido: ", (respuesta) => {
    let dinero_recibido = parseFloat(respuesta);
    let paquete = "";

    if (dinero_recibido >= 50000) {
        paquete = "Paquete A: 1 televisor, 1 modular, 3 pares de zapatos, 5 camisas y 5 pantalones.";
    } else if (dinero_recibido >= 20000 && dinero_recibido < 50000) {
        paquete = "Paquete B: 1 grabadora, 3 pares de zapatos, 5 camisas y 5 pantalones.";
    } else if (dinero_recibido >= 10000 && dinero_recibido < 20000) {
        paquete = "Paquete C: 2 pares de zapatos, 3 camisas y 3 pantalones.";
    } else {
        paquete = "Paquete D: 1 par de zapatos, 2 camisas y 2 pantalones.";
    }

    console.log("Con el dinero recibido puedes comprar: " + paquete);
    readline.close(); // se cierra el modulo readline para finalizar el programa
});
