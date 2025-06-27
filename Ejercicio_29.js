const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el primer número: ", (num1Input) => {
    let num1 = parseFloat(num1Input);

    readline.question("Ingrese el segundo número: ", (num2Input) => {
        let num2 = parseFloat(num2Input);

        readline.question("¿Qué operación desea realizar? (sumar, restar, multiplicar, dividir): ", (operacion) => {
            let resultado;

            if (operacion === "sumar") {
                resultado = num1 + num2;
                console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
            } else if (operacion === "restar") {
                resultado = num1 - num2;
                console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
            } else if (operacion === "multiplicar") {
                resultado = num1 * num2;
                console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
            } else if (operacion === "dividir") {
                if (num2 !== 0) {
                    resultado = num1 / num2;
                    console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                } else {
                    console.log("Error: No se puede dividir por cero.");
                }
            } else {
                console.log("Operación no válida. Escriba: sumar, restar, multiplicar o dividir.");
            }

            readline.close();
        });
    });
});

