const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Redirigir rutas a PHP
app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/inicio.php');
});

app.get('/GAMA_FAMILIAR/GAMA_FAMI.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_FAMI.php');
});

app.get('/GAMA_MEDIA/GAMA_MEDIAA.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_MEDIAA.php');
});

// Middleware para manejar errores 404
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Establecer el puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
