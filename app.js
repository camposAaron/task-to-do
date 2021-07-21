require('colors')
const { GuardarDB, LeerDB} = require('./helpers/guardarArchivo')
const { InquireMenu, Pausa, LeerInput } = require('./helpers/inquirer')
const Tareas = require('./model/tareas')
console.clear()

const main = async() =>{
  
    let opt = ' '
    
    const tareas =  new Tareas();
    const tareasDB = LeerDB();


    if(tareasDB){
      //establecer las tareas
      tareas.establecerTareas = tareasDB;
    }

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

        GuardarDB( tareas.listarTareas );

        await Pausa();


    }while(opt !== '0')  


}

main()