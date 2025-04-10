# 1. Imagen base
FROM node:23-slim

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código de la app
COPY . .

# 6. Exponer el puerto (ajústalo si tu app usa otro)
EXPOSE 3000

# 7. Comando para iniciar la app
CMD ["npm", "run", "dev"]
