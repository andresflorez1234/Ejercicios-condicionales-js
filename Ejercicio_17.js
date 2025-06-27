const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('ingrsa la  edad: ', (edad) => {
    let edad_num = parseInt(edad);
    readline.question('Ingrese su sexo (femenino/masculino): ', (sexo) => {
        let sexo_lower = sexo.toLowerCase();
        let vacuna;

        if (edad_num >= 70) {
            vacuna = 'vacuna C';
        } else if (edad_num >= 16 && edad_num < 69) {
            if (sexo_lower === 'femenino') {
                vacuna = 'Vacuna B';
            } else if (sexo_lower === 'masculino') {
                vacuna = 'Vacuna A';
            } else {
                vacuna = 'no importa la edad';
            }
        } else {
            vacuna = 'Vacuna A';
        }

        console.log(`La vacuna asignada es: ${vacuna}`);
        readline.close(); // se cierra el modulo readline para finalizar el programa
    });
})






