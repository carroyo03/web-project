import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import helmet from 'helmet';

// Cargar variables de entorno
dotenv.config();
console.log('API Key cargada:', process.env.NEWS_API_KEY);
console.log('Variables de entorno cargadas:', process.env);

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
