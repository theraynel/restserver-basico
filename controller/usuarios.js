
const { response, request } = require('express');
const res = require('express/lib/response');

const usuariosGet = (req = request, res = response) => {

    const { nombre, id , edad, page, limit } = req.query;

    res.json({
        mgs: 'get Api - Controlador',
        nombre,
        id,
        edad,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, id, edad} = req.body;

    res.json({
        msg: 'post Api - Controlador',
        nombre,
        edad,
        id
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'put Api - Controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}