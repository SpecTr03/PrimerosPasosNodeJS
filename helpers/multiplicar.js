const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base =5, l, h=10) => {
    let salida, consola = '';

    return new Promise(( resolve, reject) => {

        for (let i = 1; i <= h; i++) {
            salida += `${ base } X ${i} =  ${i*base} \n`;
            consola += `${ base } X ${i} =  ${i*base} \n`.yellow;
        }
        if (l) {
            console.log('==========='.cyan);
            console.log(`Tabla del ${base}`);
            console.log('==========='.cyan);
            console.log(consola);
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
            resolve(`tabla-${base}.txt`.red);
            
        })    
        
}

module.exports = {
    crearArchivo
}