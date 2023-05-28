FROM node:latest as build

WORKDIR /app

# Copia el archivo package.json y package-lock.json (o yarn.lock)
COPY yarn*.lock ./

# Instala las dependencias
RUN yarn install

# Copia todos los archivos de la aplicación React
COPY . .

# Construye la aplicación React optimizada para producción
RUN yarn run build

# Configura una nueva imagen para el servidor Nginx
FROM nginx:latest

# Copia los archivos de la compilación de la aplicación React al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para el servidor Nginx
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
