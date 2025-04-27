# Usa una imagen base de Node.js
FROM node:14

# Instala PHP y Supervisor
RUN apt-get update && apt-get install -y php php-cli supervisor

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app
<<<<<<< HEAD
ñ
=======

>>>>>>> 3b36bcf60ef3352292526c56cd1c2a3d013545b5
# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia todo el resto de los archivos del proyecto
COPY . .

# Crea el archivo de configuración de Supervisor para ejecutar ambos servidores
RUN echo "[program:node]" > /etc/supervisor/conf.d/node.conf && \
    echo "command=npm start" >> /etc/supervisor/conf.d/node.conf && \
    echo "autostart=true" >> /etc/supervisor/conf.d/node.conf && \
    echo "autorestart=true" >> /etc/supervisor/conf.d/node.conf && \
    echo "[program:php]" > /etc/supervisor/conf.d/php.conf && \
    echo "command=php -S 0.0.0.0:80 -t /app" >> /etc/supervisor/conf.d/php.conf && \
    echo "autostart=true" >> /etc/supervisor/conf.d/php.conf && \
    echo "autorestart=true" >> /etc/supervisor/conf.d/php.conf


# Expón los puertos en los que se ejecutarán los servidores
EXPOSE 3000 80

# Comando para ejecutar Supervisor, que manejará ambos procesos
CMD ["supervisord", "-n"]
