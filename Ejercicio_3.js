// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese cuantas horas lleva en el establecimiento: ', (horas) => {
    let horas_lleva = parseInt(horas);

    let costo_total = 0;

    if (horas_lleva <= 2) {
        costo_total = horas_lleva * 5000;
    } else if (horas_lleva <= 3) {
        costo_total = horas_lleva * 4000;
    } else if (horas_lleva <= 5) {
        costo_total = horas_lleva * 3000;
    } else if (horas_lleva <= 10) {
        costo_total = horas_lleva * 2000;
    } else {
        // para mas de diez horas el costo fijo para las primeras sesiones
        // es de 2000 por hora extra
        costo_total = (2 * 5000) + (3 * 4000) + (5 * 3000) + 
        ((horas_lleva - 10) * 2000);
    }
    console.log(`El costo total del establecimiento es: $${costo_total}`);
    readline.close(); // se cierra el modulo readline para finalizar el programa
});