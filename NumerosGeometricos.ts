function triangular(n: number): number {
    return (n * (n + 1)) / 2;
}

function pentagonal(n: number): number {
    return (n * (3 * n - 1)) / 2;
}

function hexagonal(n: number): number {
    return n * (2 * n - 1);
}

function encontrarSiguienteNumero(): number {
    let nTriangular = 40756;
    let nPentagonal = 40756;
    let nHexagonal = 40756;

    let t = triangular(nTriangular);
    let p = pentagonal(nPentagonal);
    let h = hexagonal(nHexagonal);

    while (true) {
        if (t < p || t < h) {
            nTriangular++;
            t = triangular(nTriangular);
        } else if (p < t || p < h) {
            nPentagonal++;
            p = pentagonal(nPentagonal);
        } else if (h < t || h < p) {
            nHexagonal++;
            h = hexagonal(nHexagonal);
        } else {
            return t;
        }
    }
}

const siguienteNumero = encontrarSiguienteNumero();
console.log(`El siguiente número que es triangular, pentagonal y hexagonal es: ${siguienteNumero}`);
