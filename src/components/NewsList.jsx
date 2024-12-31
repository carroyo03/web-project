// src/NewsList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = import.meta.env.VITE_NEWS_API_KEY;

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(

            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Noticias Destacadas</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leer más</a>
          </div>
        ))
      ) : (
        <p>Cargando noticias...</p>
      )}
    </div>
  );
};

export default NewsList;
