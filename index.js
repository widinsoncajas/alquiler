const express = require('express');
const path = require('path');
const app = express();

// Configurar Express para servir archivos estáticos (si los tienes en la carpeta "public/imagenes")
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Definir las rutas de redirección a PHP
app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/inicio.php');  // Redirecciona a la página PHP en tu servidor local
});

app.get('/GAMA_FAMILIAR/GAMA_FAMI.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_FAMI.php');
});

app.get('/GAMA_MEDIA/GAMA_MEDIAA.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_MEDIAA.php');
});

// Establecer el puerto para Express (3000 o cualquier otro puerto que desees)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
