const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese su fecha de nacimiento (formato AAAA-MM-DD): ", (fechaInput) => {
    const fechaNacimiento = new Date(fechaInput);
    const hoy = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
        console.log("Fecha inválida. Asegúrese de usar el formato AAAA-MM-DD.");
        readline.close();
        return;
    }

    let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoy.getMonth() - fechaNacimiento.getMonth();
    let dias = hoy.getDate() - fechaNacimiento.getDate();

    // Ajustar si aún no ha cumplido años este año
    if (meses < 0 || (meses === 0 && dias < 0)) {
        años--;
        meses += 12;
    }

    // Ajustar si el día aún no se ha alcanzado en este mes
    if (dias < 0) {
        meses--;
        let mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    console.log(`\nEdad: ${años} años, ${meses} meses, ${dias} días`);

    readline.close();
});
