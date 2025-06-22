const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese la cantidad de pantalones: ', (pantalones) => {
    let pantalones_num = parseInt(pantalones);
    
    readline.question('Ingrese el precio unitario: ', (unitario) => {
        let unitario_num = parseFloat(unitario);
        
        readline.question('Ingrese el porcentaje de ganancia: ', (ganancia) => {
            let ganancia_num = parseFloat(ganancia);

            // Validación corregida: solo si todos los valores son válidos
            if (!isNaN(pantalones_num) && !isNaN(unitario_num) && !isNaN(ganancia_num)) {
                let precio_venta = unitario_num + (unitario_num * ganancia_num / 100);
                let precio_total = precio_venta * pantalones_num;
                let ganancia_total = (precio_venta - unitario_num) * pantalones_num;

                console.log(`El precio de venta por pantalón es: $${precio_venta.toFixed(2)}`);
                console.log(`El precio total de los pantalones es: $${precio_total.toFixed(2)}`);
                console.log(`La ganancia total es: $${ganancia_total.toFixed(2)}`);
            } else {
                console.log('Por favor, ingrese valores numéricos válidos.');
            }

            readline.close();
        });
    });
});
