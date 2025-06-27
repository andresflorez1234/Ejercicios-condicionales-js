const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la nota de seguimiento (40%): ", (seguimientoInput) => {
    let seguimiento = parseFloat(seguimientoInput);

    readline.question("Ingrese la nota del parcial (20%): ", (parcialInput) => {
        let parcial = parseFloat(parcialInput);

        readline.question("Ingrese la nota del proyecto (10%): ", (proyectoInput) => {
            let proyecto = parseFloat(proyectoInput);

            readline.question("Ingrese la nota del examen final (30%): ", (finalInput) => {
                let examenFinal = parseFloat(finalInput);

                // Validación de notas
                if (
                    seguimiento >= 0 && seguimiento <= 5 &&
                    parcial >= 0 && parcial <= 5 &&
                    proyecto >= 0 && proyecto <= 5 &&
                    examenFinal >= 0 && examenFinal <= 5
                ) {
                    // Cálculo de nota definitiva
                    let definitiva = (seguimiento * 0.40) +
                                     (parcial * 0.20) +
                                     (proyecto * 0.10) +
                                     (examenFinal * 0.30);

                    console.log(`\nNota definitiva en Programación: ${definitiva.toFixed(2)}`);

                    if (definitiva >= 3.0) {
                        console.log("¡Ganó la materia!");
                    } else {
                        console.log("Perdió la materia.");
                    }

                } else {
                    console.log("\nError: Todas las notas deben estar entre 0 y 5.");
                }

                readline.close();
            });
        });
    });
});
