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
                name: `${'1.'.blue} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.blue} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.blue} Listar tareas completadas ` 
            },
            {
                value: '4',
                name: `${'4.'.blue} Listar tareas pendientes`   
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea   `
            },
            {
                value: '0',
                name: `${'0.'.blue} Salir`   
            }
        ]}
];

const InquireMenu = async()  =>{
    console.clear()
    console.log('========================'.green)
    console.log(' Seleccione una opcion  '.white)
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

const LeerInput = async(message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0)
                    return 'Por favor ingresa algo';
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

module.exports = {
    InquireMenu,
    Pausa,
    LeerInput
}

