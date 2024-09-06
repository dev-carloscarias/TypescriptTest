function invertirNumero(num: number): number {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function esPalindromo(num: number): boolean {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
}

function esNumeroMachete(num: number): boolean {
    let iteraciones = 0;
    let valor = num;

    while (iteraciones < 50) {
        const reflejo = invertirNumero(valor);
        valor += reflejo;
        if (esPalindromo(valor)) {
            return false;
        }
        iteraciones++;
    }

    return true;
}

function contarNumerosMachete(): number {
    let conteo = 0;

    for (let i = 1; i < 10000; i++) {
        if (esNumeroMachete(i)) {
            conteo++;
        }
    }

    return conteo;
}

const cantidadMachetes = contarNumerosMachete();
console.log(`Cantidad de Números Machete menores que 10,000: ${cantidadMachetes}`);
