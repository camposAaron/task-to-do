require('colors')
const { InquireMenu, Pausa } = require('./helpers/inquirer')
const Tarea = require('./model/tarea')
const Tareas = require('./model/tareas')
console.clear()

const main = async() =>{
  
    let opt = ' '
   
    do{
        // opt = await InquireMenu()
        // console.log({opt})
        const tareas =  new Tareas();
        const tarea = new Tarea('Comprar leche');
      
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);




        console.log('\n')
        await Pausa()
    }while(opt !== '0')  

}

main()