const inquirer = require('inquirer');
require('colors');

const Preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
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
                name: '0. Salir'   
            }
        ]}
];

const InquireMenu = async()  =>{
    console.clear()
    console.log('========================'.green)
    console.log(' Seleccione una opcion  '.green)
    console.log('========================\n'.green)
   
    const {opcion} = await inquirer.prompt(Preguntas);
    return opcion;
}


const Pausa = async() =>{
    const pregunta = [
     {   
         type: 'input',
         name: 'enter',
         message: `Presiona ${'enter'.green} para continuar`,    
    }  
    ]

    return await inquirer.prompt(pregunta)
}

module.exports = {
    InquireMenu,
    Pausa
}

