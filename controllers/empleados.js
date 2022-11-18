const { response } = require('express')
const Empleado = require('../models/empleados')

const getEmpleado = async(req, res = response) => {
    // const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleadoCampo } = req.query
    const empleado = await Empleado.find()
    res.json({
        msg: 'GET API Empleado',
        empleado
    })
}

const postEmpleado = async (req, res) => {
    //Desestructuracion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleadoCampo } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const empleado = new Empleado({ nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleadoCampo })

    await empleado.save()

    res.json({
        msg: 'POST API Empleado',
        empleado
    }) 
}

const deleteEmpleado = async( req, res) => {
    const { nombreEncuesta } = req.query

    const empleado = await Empleado.findOneAndDelete({nombreEncuesta : nombreEncuesta})

    res.json({
        msg: 'DELETE API Empleado',
        empleado
    })
}

const putEmpleado = async ( req, res) => {
    const { nombreEncuestaA, nombreEncuestaN, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleadoCampo } = req.body

    const empleado = await Empleado.findOneAndUpdate({nombreEncuesta: nombreEncuestaA},{nombreEncuesta: nombreEncuestaN, fecha: fecha, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad:edad, genero: genero, empleadoCampo:empleadoCampo})

    res.json({
        msg: 'PUT API Empleado',
        empleado
    })
}

const patchEmpleado = async (req, res) => {

    const { nombreEncuesta, fecha} = req.body

    const empleado = await Empleado.findOneAndUpdate({nombreEncuesta: nombreEncuesta},{nombreEncuesta: nombreEncuesta, fecha: fecha})

    res.json({
        msg: 'PATCH API Empleado',
        empleado
    })

}

module.exports = {
    getEmpleado,
    postEmpleado,
    putEmpleado,
    patchEmpleado,
    deleteEmpleado
}