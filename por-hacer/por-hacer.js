


const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) =>{
        if(err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDb = () =>{

    try{
    listadoPorHacer = require('../db/data.json');
    } catch(err){
        listadoPorHacer = [];
    }
    
}

const crear =  (descripcion) =>{
    cargarDb();
      let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();
   return porHacer;
}

const getListado = ()=>{
    cargarDb();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
     let index = listadoPorHacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
     });

     if( index >= 0 ){
         listadoPorHacer[index].completado = completado;
         guardarDB();
         return true
     }else{
         return false;
     }
}

const borrado = (descripcion) =>{
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
     });

     if( index >= 0 ){      
        listadoPorHacer.splice( index, 1 );
        guardarDB();
        return true
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}