const Tarea = require("./tarea");

class Tareas{
    _listado = {}
    
    constructor(){
        this._listado = {};
    }

    CrearTarea(desc = ' '){
        const  tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listarTareas (){
        const listado = [];
        Object.keys(this._listado).forEach((value)=>{
            const tarea =  this._listado[value];
            listado.push(tarea);
        })

        return listado;
    }

    set establecerTareas(tareas){
        this._listado = tareas;
    }


    //indice en verde,
    //completada: verde, pendiente: rojo
    //1. recolectar basura :: pendiente | Completada.
    get ListadoCompleto(){
        const listado = [];
        console.log('\n');
        Object.keys(this._listado).forEach((value, index)=>{
            const {desc, completadoEn} = this._listado[value];
            completadoEn === null ?
            console.log(`${index+1}`.green +` ${ desc}:: ${'Pendiente'.red}`) :
            console.log(`${index+1}`.green +` ${ desc}:: ${'Completado'.green}`) 
        });
    }
}

module.exports = Tareas;