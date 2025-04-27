const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Configurar express para servir archivos estáticos (si quieres mantenerlo)
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Redireccionar a PHP real
app.get('/', (req, res) => {
  res.redirect('http://localhost:8082/inicio.php');
});

app.get('/GAMA_FAMILIAR/GAMA_FAMI.php', (req, res) => {
  res.redirect('http://localhost:8082/GAMA_FAMI.php');
});

app.get('/GAMA_MEDIA/GAMA_MEDIAA.php', (req, res) => {
  res.redirect('http://localhost:8082/GAMA_MEDIAA.php');
});

// Puerto donde escucha Express
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
