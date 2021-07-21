require('colors')
const { InquireMenu, Pausa, LeerInput } = require('./helpers/inquirer')
const Tarea = require('./model/tarea')
const Tareas = require('./model/tareas')
console.clear()

const main = async() =>{
  
    let opt = ' '
    const tareas =  new Tareas();

    do{
        //imprimir menu
        opt = await InquireMenu()
        switch(opt){
            
            case '1':
              //crear tarea 
              const input = await LeerInput('descripcion: ')
              tareas.CrearTarea(input);
            break;
            
            case '2':
              console.log(tareas.listarTareas);
            break;


        }

        await Pausa()
    }while(opt !== '0')  

}

main()