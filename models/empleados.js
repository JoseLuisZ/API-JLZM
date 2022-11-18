const {Schema, model} = require('mongoose')

const EmpleadoSchema = Schema({
    nombreEncuesta:{
        type: String
    },
    fecha:{
        type: String
    },
    documentoEncuestado:{
        type: Number
    }, 
    nombreEncuestado:{
        type: String
    },
    edad:{
        type: Number
    },
    genero:{
        type: String
    },
    empleadoCampo:{
        type: String
    }
})


module.exports = model('Empleado',EmpleadoSchema)