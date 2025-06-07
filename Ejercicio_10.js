// Importamos el modulo readline para manejar permitir que el usuario usuario 
// ingrese datos de entrada en el node.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let horas_trabajadas = 0;
let pago_por_hora = 0;
let sueldo_semanal = 0;

readline.question("Ingrese las horas de trabajo: ", (horas) => {
    horas_trabajadas = parseInt(horas);

    readline.question("Ingrese cuanto le pagan por hora: ", (pago) => {
        pago_por_hora = parseFloat(pago);

        if (horas_trabajadas > 50) {
            console.log("Error: No se permite trabajar mas de 50 horas");
        } else {
            if (horas_trabajadas <= 40) {
                sueldo_semanal = horas_trabajadas * pago_por_hora;
            } else if (horas_trabajadas <= 45) {
                let sueldo_base = 40 * pago_por_hora;
                let horas_extras_1 = horas_trabajadas - 40;
                let sueldo_extra = horas_extras_1 * (pago_por_hora * 2);
                sueldo_semanal = sueldo_base + sueldo_extra;
            } else {
                let sueldo_base = 40 * pago_por_hora;
                let sueldo_extra_1 = 5 * (pago_por_hora * 2);
                let horas_extra_2 = horas_trabajadas - 45;
                let sueldo_extra_2 = horas_extra_2 * (pago_por_hora * 3);
                sueldo_semanal = sueldo_base + sueldo_extra_1 + sueldo_extra_2;
            }
            console.log("El sueldo semanal del trabajador es: $" + sueldo_semanal);
        }

        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
});
