// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese cuántas horas de trabajo lleva: ', (horas) => {
    let horas_trabajadas = parseInt(horas);
    readline.question('Ingrese el pago por hora: ', (pago) => {
        let pago_por_hora = parseFloat(pago);
        let horas_normales = 40;
        let sueldo_semanal = 0;

        if (horas_trabajadas <= horas_normales) {
            sueldo_semanal = horas_trabajadas * pago_por_hora;
        } else {
            let horas_extras = horas_trabajadas - horas_normales;
            sueldo_semanal = (horas_normales * pago_por_hora) + (horas_extras * pago_por_hora * 2);
        }

        console.log(`El sueldo semanal es: $${sueldo_semanal}`);
        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
});