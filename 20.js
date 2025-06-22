let salario = 1500;
console.log('Salario inicial: $1500.00');

let año = 1;

// Año 1
if (año === 1) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
    año++;
}

// Año 2
if (año === 2) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
    año++;
}

// Año 3
if (año === 3) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
    año++;
}

// Año 4
if (año === 4) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
    año++;
}

// Año 5
if (año === 5) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
    año++;
}

// Año 6
if (año === 6) {
    salario += salario * 0.10;
    console.log(`Año ${año}: $${salario.toFixed(2)}`);
}

// Salario final después de 6 años
console.log(`\nSalario final al cabo de 6 años: $${salario.toFixed(2)}`);
