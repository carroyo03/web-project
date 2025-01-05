import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path'; // Necesario para manejar rutas

// Cargar variables de entorno
dotenv.config();
console.log('API Key cargada:', process.env.NEWS_API_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Ruta para obtener noticias desde NewsAPI
app.get('/api/news', async (req, res) => {
    try {
        const apiKey = process.env.NEWS_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener noticias' });
    }
});

// Sirve los archivos estáticos del frontend (carpeta dist)
const __dirname = path.resolve(); // Para obtener el directorio base
app.use(express.static(path.join(__dirname, 'dist')));

// Maneja todas las rutas desconocidas redirigiendo a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
