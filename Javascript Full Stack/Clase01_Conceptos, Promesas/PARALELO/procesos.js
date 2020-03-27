const util = require('util');
const sleep = util.promisify(setTimeout);
module.exports = {
    async proceso1() {
        try {
            //throw new Error('Algun error');
            await sleep(4000);
            return 'Proceso 1 Finalizado';
        } catch (error) {
            console.log(error);
        }
    },

    async proceso2() {
        try {
            await sleep(2000);
            return 'Proceso 2 Finalizado';
        } catch (error) {
            console.log(error);
        }

    },

    async proceso3(){
        try {
            await sleep(1000);
            return 'Proceso 3 Finalizado';
        } catch (error) {
            console.log(error);
        }
    }
}