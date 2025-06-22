const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el tipo de huevo (A o AA): ", (tipo) => {
    tipo = tipo.toUpperCase();

    readline.question("Ingrese la cantidad de huevos a llevar: ", (cantidadInput) => {
        let cantidad = parseInt(cantidadInput);

        let precioUnitario;
        if (tipo === "A") {
            precioUnitario = 220;
        } else if (tipo === "AA") {
            precioUnitario = 250;
        } else {
            console.log("Tipo de huevo inválido. Debe ser 'A' o 'AA'.");
            readline.close();
            return;
        }

        if (cantidad <= 0) {
            console.log("Cantidad inválida. Debe ser mayor que cero.");
            readline.close();
            return;
        }

        // Determinar porcentaje de descuento
        let descuento = 0;
        if (cantidad >= 1 && cantidad <= 100) {
            descuento = 0.03;
        } else if (cantidad <= 200) {
            descuento = 0.05;
        } else if (cantidad <= 300) {
            descuento = 0.08;
        } else {
            descuento = 0.10;
        }

        let precioBruto = precioUnitario * cantidad;
        let valorDescuento = precioBruto * descuento;
        let precioFinal = precioBruto - valorDescuento;

        console.log(`\nTipo de huevo: ${tipo}`);
        console.log(`Cantidad: ${cantidad}`);
        console.log(`Precio unitario: $${precioUnitario}`);
        console.log(`Precio bruto: $${precioBruto.toFixed(2)}`);
        console.log(`Descuento aplicado: ${descuento * 100}%`);
        console.log(`Valor del descuento: $${valorDescuento.toFixed(2)}`);
        console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);

        readline.close();
    });
});
