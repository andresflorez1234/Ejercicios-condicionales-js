const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el número de hombres: ", (hombresInput) => {
    let hombres = parseInt(hombresInput);

    readline.question("Ingrese el número de mujeres: ", (mujeresInput) => {
        let mujeres = parseInt(mujeresInput);

        let total = hombres + mujeres;

        if (total > 0) {
            let porcentajeHombres = (hombres / total) * 100;
            let porcentajeMujeres = (mujeres / total) * 100;

            console.log(`\nPorcentaje de hombres: ${porcentajeHombres.toFixed(2)}%`);
            console.log(`Porcentaje de mujeres: ${porcentajeMujeres.toFixed(2)}%`);
        } else {
            console.log("\nNo hay estudiantes en el grupo.");
        }

        readline.close();
    });
});
