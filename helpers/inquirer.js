const inquirer = require('inquirer');
const { preguntas, input } = require('./list.js');
require('colors');

const inquirerMenu = async () => {

    console.clear();
    console.log('========================='.cyan);
    console.log('  Seleccione una opción  '.cyan.bold);
    console.log('========================='.cyan);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}
const pause = async () => {
    console.log('\n');
    await inquirer.prompt(input);
}

const leerInput = async (message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true; // por que validate devuelve un booleano
            }
        }
    ];

    const { desc } = await inquirer.prompt(pregunta);
    return desc


}

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices

        }
    ]


    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: ( tarea.fechaCompletado ) ? true : false
        }
    });

    
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'selecciones',
            choices

        }
    ]


    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
};



/////////////////////////
// con es6 y "type": "module" en package.json

// import inquirer from 'inquirer';
// import { preguntas, input } from './list.js';
// import 'colors';

// export const inquirerMenu = async () => {
//     console.clear();
//     console.log('========================='.cyan);
//     console.log(' Seleccione una opción '.cyan);
//     console.log('========================='.cyan);

//     const { opcion } = await inquirer.prompt(preguntas);

//     return opcion;
// };

// export const pause = async () => {
//     console.log('\n');
//     await inquirer.prompt(input);
// };

// export const leerInput = async (message) => {
//     const pregunta = [
//         {
//             type: 'input',
//             name: 'desc',
//             message,
//             validate(value) {
//                 if (value.length === 0) {
//                     return 'Por favor ingrese un valor';
//                 }
//                 return true;
//             },
//         },
//     ];

//     const { desc } = await inquirer.prompt(pregunta);
//     return desc;
// };

// export default {
//     inquirerMenu,
//     pause,
//     leerInput,
// };