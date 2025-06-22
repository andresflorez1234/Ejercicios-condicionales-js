const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la nota de seguimiento (60%): ", (seguimientoInput) => {
    let seguimiento = parseFloat(seguimientoInput);

    readline.question("Ingrese la nota del primer parcial (20%): ", (parcial1Input) => {
        let parcial1 = parseFloat(parcial1Input);

        readline.question("Ingrese la nota del segundo parcial (20%): ", (parcial2Input) => {
            let parcial2 = parseFloat(parcial2Input);

            // Validar que todas las notas estén en el rango 0-5
            if (
                seguimiento >= 0 && seguimiento <= 5 &&
                parcial1 >= 0 && parcial1 <= 5 &&
                parcial2 >= 0 && parcial2 <= 5
            ) {
                // Cálculo de la nota definitiva
                let definitiva = (seguimiento * 0.60) + (parcial1 * 0.20) + (parcial2 * 0.20);

                console.log(`\nNota definitiva en Lógica: ${definitiva.toFixed(2)}`);

                if (definitiva >= 3.0) {
                    console.log("¡Ganó la materia!");
                } else {
                    console.log("Perdió la materia.");
                }

            } else {
                console.log("\nError: Las notas deben estar entre 0 y 5.");
            }

            readline.close();
        });
    });
});

