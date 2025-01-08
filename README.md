# NewsApp - Proyecto Grupal

## 📑 Descripción
**NewsApp** es una aplicación web que muestra las noticias destacadas más recientes utilizando la API de [NewsAPI](https://newsapi.org/). Combina un frontend desarrollado con React y un backend construido con Node.js y Express. El proyecto tiene como objetivo integrar conocimientos de desarrollo web y programación de servidores.

## 🛠️ Tecnologías Usadas
- **Frontend**: React, Vite, Axios.
- **Backend**: Node.js, Express, Axios.
- **Estilos**: CSS.
- **Gestión de Dependencias**: NPM.
- **Despliegue**: Tanto frontend y backend desplegados en [Render](render.com).

## ⚙️ Instalación y Configuración

### Requisitos
- **Node.js** v20+
- **NPM** (incluido con Node.js)
- Clave de API de [NewsAPI](https://newsapi.org/).

### Instrucciones
1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/carroyo03/web-project.git
   cd web-project

2. **Instalar Dependencias**
   ```bash
   npm install
   
3. **Configurar el Archivo .env Crea un archivo .env en la raíz del proyecto y añade las siguientes líneas:**
   ```bash
   NEWS_API_KEY=tu_api_key
   PORT=3000
   
4. **Iniciar el Backend**
   ```bash
   node index.js

5. **Iniciar el Frontend En otra terminal, ejecuta:**
   ```bash
   npm run dev

6. **Abrir la Aplicación**
- **Frontend**: Visita [http://localhost:5173](http://localhost:5173) en tu navegador.
- **Backend (API)**: Prueba [http://localhost:3000/api/news](http://localhost:3000/api/news) en tu navegador o en herramientas como Postman.

## ✨ Funcionalidades
- Obtiene noticias destacadas desde [NewsAPI](https://newsapi.org/).
- Backend seguro que oculta la clave API y actúa como proxy entre el frontend y NewsAPI.
- Manejo de estados (`loading`, `error`) en el frontend.
- Diseño responsivo básico.
