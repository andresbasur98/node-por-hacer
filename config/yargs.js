const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
  
    completado:{
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'

    }
}

const argv = require('yargs')
            .command('crear','crea un item de la lista',descripcion)
            .command('listar','lista los items de la lista')
            .command('actualizar','actualiza el nombre de la lista',descripcion,completado)
            .command('borrar','borra la tarea',descripcion)
            .help()
            .argv;

module.exports = {
    argv
}