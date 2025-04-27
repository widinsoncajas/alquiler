const express = require('express');
const path = require('path');
const { exec } = require('child_process'); // Para ejecutar comandos del sistema
const app = express();

// Ruta principal para ejecutar GAMA_FAMILIAR.php
app.get('/', (req, res) => {
  exec('php ' + path.join(__dirname, 'GAMA_FAMILIAR', 'GAMA_FAMILIAR.php'), (err, stdout, stderr) => {
    if (err) {
      console.error('Error ejecutando el archivo PHP:', err);
      return res.status(500).send('Error ejecutando el archivo PHP: ' + err.message);
    }
    if (stderr) {
      console.error('stderr:', stderr);
      return res.status(500).send('Error en la ejecución de PHP: ' + stderr);
    }
    res.send(stdout);
  });
});

// Configurar express para servir archivos estáticos (como imágenes y carpetas)
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));
app.use('/GAMA_FAMILIAR', express.static(path.join(__dirname, 'GAMA_FAMILIAR')));
app.use('/GAMA_MEDIA', express.static(path.join(__dirname, 'GAMA_MEDIA')));

// Ruta para servir el archivo PHP de Gama Familiar
app.get('/GAMA_FAMILIAR/GAMA_FAMI.php', (req, res) => {
  res.sendFile(path.join(__dirname, 'GAMA_FAMILIAR', 'GAMA_FAMI.php'));
});

// Ruta para servir el archivo PHP de Gama Media
app.get('/GAMA_MEDIA/GAMA_MEDIAA.php', (req, res) => {
  res.sendFile(path.join(__dirname, 'GAMA_MEDIA', 'GAMA_MEDIAA.php'));
});

// Puerto donde el servidor escuchará
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
