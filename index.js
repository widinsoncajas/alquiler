const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Configurar express para servir archivos estáticos
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Redirecciones para PHP con un objeto de rutas
const phpRoutes = {
  '/': 'inicio.php',
  '/GAMA_FAMILIAR/GAMA_FAMI.php': 'GAMA_FAMI.php',
  '/GAMA_MEDIA/GAMA_MEDIAA.php': 'GAMA_MEDIAA.php'
};

Object.keys(phpRoutes).forEach(route => {
  app.get(route, (req, res) => {
    res.redirect(`http://localhost:8082/${phpRoutes[route]}`);
  });
});

// Puerto donde escucha Express
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
