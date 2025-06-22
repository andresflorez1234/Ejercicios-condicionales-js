const readline =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Numero 1:', (numero_1) => {
    let num_1 = parseInt(numero_1);
    readline.question('numero 2:', (numero_2) => {
        let num_2 = parseInt(numero_2);
        readline.question('numero 3:', (numero_3) => {
            let num_3 = parseInt(numero_3);

            let mayor, medio, menor;

            // Comparaciones con solo condicionales
            if (num_1 >= num_2 && num_1 >= num_3) {
                mayor = num_1;
                if (num_2 >= num_3) {
                    medio = num_2;
                    menor = num_3;
                } else {
                    medio = num_3;
                    menor = num_2;
                }
            } else if (num_2 >= num_1 && num_2 >= num_3) {
                mayor = num_2;
                if (num_1 >= num_2) {
                    medio = num_1;
                    menor = num_3;
                } else {
                    medio = num_3;
                    menor = num_1;
                }
            } else {
                mayor = num_3;
                if (num_1 >= num_2) {
                    medio = num_1;
                    menor = num_2;
                } else {
                    medio = num_2;
                    menor = num_1;
                }
            }

            console.log(`\nMayor: ${mayor}`);
            console.log(`Medio: ${medio}`);
            console.log(`Menor: ${menor}`);

            readline.close();
        })
    })
})
