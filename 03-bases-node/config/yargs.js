
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar',
                })
                .option('l', {
                    alias: 'listado',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola',
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Determina el multiplicador limite'
                })
                .check((argv, options) => {
                    console.log(argv.b, typeof argv.b)
                    if (isNaN(argv.b)) {
                        throw new Error('El valor del argumento "base" debe ser numerico')
                    }else return true
                })
                .argv;

module.exports = argv;