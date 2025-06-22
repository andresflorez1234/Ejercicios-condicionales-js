const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese cuántos años de antigüedad tiene: ', (antiguedad) => {
    let antiguedad_num = parseInt(antiguedad);
    readline.question('Ingrese su sueldo: ', (sueldo) => {
        let sueldo_num = parseFloat(sueldo);
        let bono;

        if (antiguedad_num < 4 || sueldo_num < 2000) {
            bono = sueldo_num * 0.25;
        } else {
            bono = sueldo_num * 0.20;
        }

        console.log(`El bono es de ${bono} pesos`);
        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
})