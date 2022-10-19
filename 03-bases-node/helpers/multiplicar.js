
const fs = require('fs');
const colors = require('colors')

const crearArchivo = ( base = 5, listado, hasta ) => {
    return new Promise((resolve, reject) => {
        
        let salida = ''
        let consola = ''

        for (let i = 1; i < hasta + 1; i++) {
            salida += `  ${base} x ${ i } = ${ base * i }\n`
            consola += `  ${base} `.yellow + ` x `.brightRed + ` ${ i } `.yellow + ` = `.brightRed + ` ${ base * i } `.brightMagenta + ` \n`
        }; 
        
        (listado)
            ?(
                console.log('========================='.brightBlue),
                console.log(`       Tabla del ${base}       `.brightMagenta),
                console.log('========================='.brightBlue),
                
                console.log(consola)
            )
            :(false)
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida )
    
        resolve(`tabla-${base}.txt creado`.rainbow)
    
    })

}

module.exports = {
    crearArchivo
}