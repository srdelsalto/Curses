const { proceso1, proceso2 } = require('./procesos');

async function main() {
    console.time('Tiempo total de ejecucion: ')
    const valor1 = await proceso1();
    const valor2 = await proceso2();
    console.timeEnd('Tiempo total de ejecucion: ')

    console.log(valor1);
    console.log(valor2);
}

main();