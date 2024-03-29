const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    // establecer tareas
    // cargarTareas
    tareas.cargarTareasFromArray(tareasDB)
  }

  do {
    opt = await inquirerMenu();
    // console.log({opt});
    switch (opt) {
      case '1':
        // crear accion
        const desc = await leerInput('Descripción:');
        // console.log(desc);
        tareas.crearTarea(desc)
        break;
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarTareasPorEstado(true)
        break;
      case '4':
        tareas.listarTareasPorEstado(false)
        break;
      case '5':
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas( ids );
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const confirm = await confirmar('¿Estás seguro/a?');
          if (confirm) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente');
          }
        }
        break;
      case '0':
        // crear accion
        break;
    }

    guardarDB(tareas.listadoArr);

    await pause();

  } while (opt !== '0');


}

main();



