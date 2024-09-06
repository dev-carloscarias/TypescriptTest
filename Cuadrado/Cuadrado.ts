import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function distanciaCuadrada(p1: [number, number], p2: [number, number]): number {
    return (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2;
}

function esCuadrado(p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): boolean {
    const distancias = [
        distanciaCuadrada(p1, p2),
        distanciaCuadrada(p1, p3),
        distanciaCuadrada(p1, p4),
        distanciaCuadrada(p2, p3),
        distanciaCuadrada(p2, p4),
        distanciaCuadrada(p3, p4)
    ];

    distancias.sort((a, b) => a - b);

    return (
        distancias[0] > 0 &&
        distancias[0] === distancias[1] &&
        distancias[1] === distancias[2] &&
        distancias[2] === distancias[3] &&
        distancias[4] === distancias[5] &&
        distancias[4] > distancias[0]
    );
}

function leerPunto(punto: string): Promise<[number, number]> {
    return new Promise((resolve) => {
        rl.question(`Ingresa las coordenadas del ${punto} en formato "x,y": `, (input) => {
            const [x, y] = input.split(',').map(Number);
            resolve([x, y]);
        });
    });
}

async function main() {
    const p1 = await leerPunto('punto 1');
    const p2 = await leerPunto('punto 2');
    const p3 = await leerPunto('punto 3');
    const p4 = await leerPunto('punto 4');

    if (esCuadrado(p1, p2, p3, p4)) {
        console.log('Los puntos forman un cuadrado perfecto.');
    } else {
        console.log('Los puntos NO forman un cuadrado perfecto.');
    }

    rl.close();
}

main();
