const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el precio fijo por par de zapatos: ', (precioInput) => {
    let precio = parseFloat(precioInput);

    readline.question('Ingrese el número de zapatos vendidos hoy: ', (cantidadInput) => {
        let cantidad = parseInt(cantidadInput);

        if (cantidad > 0) {
            let ventasTotales = precio * cantidad;
            let utilidad = ventasTotales * 0.35;

            console.log(`\nVentas totales: $${ventasTotales.toFixed(2)}`);
            console.log(`Utilidad (35%): $${utilidad.toFixed(2)}`);
        } else {
            console.log('\nNo se vendieron zapatos hoy. No hay utilidad.');
        }

        readline.close();
    });
});


