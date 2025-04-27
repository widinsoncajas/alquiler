const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Ruta principal para levantar servidor PHP
app.get('/', (req, res) => {
  exec('php -S 0.0.0.0:8080 -t ' + path.join(__dirname, 'GAMA_FAMILIAR'), (err, stdout, stderr) => {
    if (err) {
      console.error('Error ejecutando el servidor PHP:', err);
      return res.status(500).send('Error ejecutando el servidor PHP: ' + err.message);
    }
    if (stderr) {
      console.error('stderr:', stderr);
      // A veces PHP lanza stderr como advertencia, pero igual funciona
    }
    res.send('Servidor PHP corriendo en http://localhost:8080/GAMA_FAMILIAR.php');
  });
});

// Node escuchando
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Node corriendo en puerto ${port}`);
});
