const express = require('express');
const router = express.Router();

//controlador
const controlador = require('../controladores/usuarios');

//Ruta para traer usuarios
router.get('/', controlador.leerUsuarios);

//Ruta para crear usuarios
router.post('/', controlador.crearUsuario);

//Ruta para editar usuarios
router.put('/:id', controlador.actualizarUsuario);

//Ruta para eliminar usuarios
router.delete('/:id', controlador.eliminarUsuario);

module.exports = router;