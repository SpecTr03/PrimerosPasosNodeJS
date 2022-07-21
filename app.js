const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.log(argv);

//Recibiendo informacion desde consola
// const [, , arg3 = 'base=5'] = process.argv;
// console.log(arg3);

// const base = 6;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));