const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese un número entre 1 y 12 (correspondiente a un mes): ", (mesInput) => {
    let mes = parseInt(mesInput);

    let nombreMes = "";
    let signos = "";

    if (mes === 1) {
        nombreMes = "Enero";
        signos = "Capricornio - Acuario";
    } else if (mes === 2) {
        nombreMes = "Febrero";
        signos = "Acuario - Piscis";
    } else if (mes === 3) {
        nombreMes = "Marzo";
        signos = "Piscis - Aries";
    } else if (mes === 4) {
        nombreMes = "Abril";
        signos = "Aries - Tauro";
    } else if (mes === 5) {
        nombreMes = "Mayo";
        signos = "Tauro - Géminis";
    } else if (mes === 6) {
        nombreMes = "Junio";
        signos = "Géminis - Cáncer";
    } else if (mes === 7) {
        nombreMes = "Julio";
        signos = "Cáncer - Leo";
    } else if (mes === 8) {
        nombreMes = "Agosto";
        signos = "Leo - Virgo";
    } else if (mes === 9) {
        nombreMes = "Septiembre";
        signos = "Virgo - Libra";
    } else if (mes === 10) {
        nombreMes = "Octubre";
        signos = "Libra - Escorpio";
    } else if (mes === 11) {
        nombreMes = "Noviembre";
        signos = "Escorpio - Sagitario";
    } else if (mes === 12) {
        nombreMes = "Diciembre";
        signos = "Sagitario - Capricornio";
    } else {
        console.log("Número inválido. Debe ser entre 1 y 12.");
    }

    if (nombreMes !== "") {
        console.log(`\nMes: ${nombreMes}`);
        console.log(`Signos del zodiaco: ${signos}`);
    }

    readline.close();
});
