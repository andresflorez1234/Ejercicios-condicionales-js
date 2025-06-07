// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let costo_por_km = 10;

readline.question("Ingrese la distancia total del viaje en kilómetros: ", (distancia) => {
    let distancia_viaje = parseInt(distancia);

    if (distancia_viaje <= 0) {
        console.log("Quedarse en casa.");
    } else if (distancia_viaje === 750) {
        let costo_total = distancia_viaje * 2 * costo_por_km;
        console.log("Destino: México, Costo total del pasaje: $" + costo_total);
    } else if (distancia_viaje === 800) {
        let costo_total = distancia_viaje * 2 * costo_por_km;
        console.log("Destino: Puerto Vallarta, Costo total del pasaje: $" + costo_total);
    } else if (distancia_viaje === 1200) {
        let costo_total = distancia_viaje * 2 * costo_por_km;
        console.log("Destino: Acapulco, Costo total del pasaje: $" + costo_total);
    } else if (distancia_viaje === 1800) {
        let costo_total = distancia_viaje * 2 * costo_por_km;
        console.log("Destino: Cancún, Costo total del pasaje: $" + costo_total);
    } else {
        console.log("No hay destino disponible para esa distancia por lo tanto te quedas en casa.");
    }

    readline.close(); // se cierra el modulo readline para finalizar el programa
});
