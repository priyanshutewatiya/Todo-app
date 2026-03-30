import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const API_KEY = 'bafd029d94e04aeaba46a27ad4d0caa2';

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          sources: 'techcrunch',
          apiKey: API_KEY,
        },
      })
      .then((response) => {
        setArticles(response.data.articles || []);
        setError('');
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message || 'Something went wrong');
      })
      .finally(() => {
        setLoading(false);



        <button> onClick={fetchdata}  Search</button>
        {currentNews.map((item, index) => 
          <NewsCard key = { index} news={item}>
            
          </NewsCard>
        )}







      });
  }, []);

  return (
    <div className="app">
      <Header />

      <main>
        {loading && <p>Loading news...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && articles.length > 0 && (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}

        {!loading && !error && articles.length === 0 && <p>No articles found.</p>}
      </main>

      <Footer />
    </div>
  );
}

export default App;