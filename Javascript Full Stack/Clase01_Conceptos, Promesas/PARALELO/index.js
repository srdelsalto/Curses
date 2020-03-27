const { proceso1, proceso2, proceso3 } = require('./procesos');

async function main() {
    console.time('Tiempo total de ejecucion: ')
    const results = await Promise.all([proceso1(), proceso2(), proceso3()]);
    console.timeEnd('Tiempo total de ejecucion: ')

    /*console.log(results[0]);
    console.log(results[1]);
    console.log(results[1]);*/

    results.forEach(result => {
        console.log(result);
    });
}

main();