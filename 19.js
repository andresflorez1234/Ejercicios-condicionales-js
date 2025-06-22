const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el saldo anterior: ', (saldo) => {
    let saldo_num = parseFloat(saldo);

    readline.question('Ingrese el monto de compra: ', (monto) => {
        let monto_num = parseFloat(monto);

        readline.question('Ingrese el pago realizado en el corte anterior: ', (corte) => {
            let corte_num = parseFloat(corte);

            let saldo_actual = saldo_num + monto_num - corte_num;

            if (corte_num < 0.15 * saldo_num) {
                let interes = saldo_actual * 0.12;
                let multa = 200;
                saldo_actual += interes + multa;
                console.log('Se aplican intereses del 12% y multa de $200 por no pagar el mínimo.');
            } else {
                console.log('No se aplican intereses ni multa.');
            }

            let pago_minimo = saldo_actual * 0.15;
            let pago_sin_intereses = saldo_actual * 0.85;

            console.log(`\nSaldo actual: $${saldo_actual.toFixed(2)}`);
            console.log(`Pago mínimo: $${pago_minimo.toFixed(2)}`);
            console.log(`Pago para no generar intereses: $${pago_sin_intereses.toFixed(2)}`);

            readline.close();
        });
    });
});
