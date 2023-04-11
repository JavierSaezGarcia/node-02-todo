const Tarea = require("./tarea");
require('colors');
/**
 * _listado:
 *      { 'uuid-123456789-456789-2: { id: 12, desc: asd, fechaCompletado: null }}
 */
class Tareas {

    _listado = {};

    get listadoArr() {
        
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            
            listado.push( tarea );
            
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea( desc );

        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = []){
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }
    
    borrarTarea( id = '' ){
        if( this._listado[id]) {
            delete this._listado[id];
        }
        
    }

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${++i}`.green;
            console.log(`${idx}. ${ tarea.desc } :: ${ tarea.fechaCompletado !== null ? 'Completada'.green : 'Pendiente'.red}`);            
        });
        
    }
    listarTareasPorEstado( completadas = true ){

        console.log();        
        this.listadoArr.forEach((tarea) => {
            let i = 0;
            const { desc, fechaCompletado } = tarea;
            const estado = (fechaCompletado) 
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            // discrimino si esta completada o no en el parametro de la funcion para saber que eleccion he hecho y tambien si la fecha de completado no es null
            if(completadas && fechaCompletado){                
                    let contador = ++i;
                    console.log(`${contador.toString().green}. ${ desc} :: ${ fechaCompletado.green }`);               
            }else if(!completadas && !fechaCompletado){                  
                    let contador = ++i;
                    console.log(`${contador.toString().green}. ${ desc } :: ${ estado }`);               
            }
        })
    }
    toggleCompletadas( ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if(!tarea.fechaCompletado){
                tarea.fechaCompletado = new Date().toLocaleString("es-ES",
                {hour: "2-digit", minute:"2-digit", second: "2-digit", day: "2-digit", month: "long", year: "numeric"}
                );
                
            }
        });

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id)){
                this._listado[tarea.id].fechaCompletado = null;
                
            }
        });
    }
    

}

module.exports = Tareas;