
require('colors');

// Array de objetos de tipos de preguntas
const preguntas = [
    {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir \n'
        }
    ]
    }

];

// array de objeto de input o pregunta unica
const input = [
    {
        type: 'input',
        name: 'salida',
        message: `Presione ${'ENTER'.green} para continuar`

    }
];


module.exports = { 
    preguntas,
    input
};