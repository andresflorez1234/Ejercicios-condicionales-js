const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el tamaño del terreno en metros cuadrados: ", (terrenoInput) => {
    let terreno = parseFloat(terrenoInput);

    if (terreno > 0) {
        let areaPinos = terreno * 0.35;
        let areaCedros = terreno * 0.65;

        let cantidadPinos = Math.floor(areaPinos / 2.5);
        let cantidadCedros = Math.floor(areaCedros / 3);

        console.log(`\nÁrea para pinos: ${areaPinos.toFixed(2)} m²`);
        console.log(`Área para cedros: ${areaCedros.toFixed(2)} m²`);

        console.log(`\nCantidad de pinos que se pueden sembrar: ${cantidadPinos}`);
        console.log(`Cantidad de cedros que se pueden sembrar: ${cantidadCedros}`);
    } else {
        console.log("El tamaño del terreno debe ser mayor que 0.");
    }

    readline.close();
});
