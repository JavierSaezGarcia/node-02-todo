

/**
 * 
 * @returns No se usa este archivo sino el inquirer.js
 * 
 */

require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log(('========================='.cyan));
        console.log('  Seleccione una opción  '.cyan);
        console.log('========================='.cyan);
        console.log(`${'1.'.cyan} Crear tarea`);
        console.log(`${'2.'.cyan} Listar tareas`);
        console.log(`${'3.'.cyan} Listar tareas completadas`);
        console.log(`${'4.'.cyan} Listar tareas pendientes`);
        console.log(`${'5.'.cyan} Completar tarea(s)`);
        console.log(`${'6.'.cyan} Borrar tarea`);
        console.log(`${'0.'.cyan} Salir \n`);


        const rl = require('readline').createInterface({
            input: process.stdin, // recibe informacion del usuario
            output: process.stdout // envia informacion para verlo
        });

        rl.question('seleccione una opción: ', (opt) => {
            console.log(opt);
            rl.close();
            resolve(opt);
        })

    });


}

const pause = () => {

    return new Promise(resolve => {
        
        const rl = require('readline').createInterface({
            input: process.stdin, // recibe informacion del usuario
            output: process.stdout // envia informacion para verlo
        });

        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            // console.log( opt );
            rl.close();
           
            resolve();
        });
    });


}

module.exports = {
    mostrarMenu,
    pause
};