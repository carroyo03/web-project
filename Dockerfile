# Etapa 1: Construir el Frontend
FROM node:16 as build

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el código
COPY . .
RUN npm run build

# Etapa 2: Servir el Frontend con Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto para Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
