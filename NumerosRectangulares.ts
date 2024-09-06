function encontrarNumerosRectangulares(): void {
    for (let a = 1; a < 1000; a++) {
        for (let b = a + 1; b < 1000; b++) {
            let c = 1000 - a - b;
            if (c > 0 && a * a + b * b === c * c) {
                console.log(`Números rectangulares encontrados: a = ${a}, b = ${b}, c = ${c}`);
                return;
            }
        }
    }
}

encontrarNumerosRectangulares();
