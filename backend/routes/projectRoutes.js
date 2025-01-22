const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

// Rutas
router.get('/', getProjects); // Obtener todos los proyectos
router.post('/', createProject); // Crear un proyecto nuevo

module.exports = router;
