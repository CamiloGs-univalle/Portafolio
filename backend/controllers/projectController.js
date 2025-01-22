const projects = []; // Aquí puedes usar un modelo o base de datos

// Obtener todos los proyectos
const getProjects = (req, res) => {
  res.status(200).json(projects);
};

// Crear un nuevo proyecto
const createProject = (req, res) => {
  const { name, description, link } = req.body;
  if (!name || !description || !link) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
  const newProject = { id: Date.now(), name, description, link };
  projects.push(newProject);
  res.status(201).json(newProject);
};

module.exports = { getProjects, createProject };
