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
            const tarea = this._listado[value];
            listado.push(tarea);
        })

        return listado
    }
}

module.exports = Tareas;