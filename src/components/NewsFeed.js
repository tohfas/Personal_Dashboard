// src/components/NewsFeed.js
import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('technology');
  const apiKey = 'd332cdaa7d33480ba37d1fd6dfe555fe';

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, [apiKey, category]);

  return (
    <div className="max-w-md mt-8 p-4 border rounded shadow-md text-center"> {/* Centered container */}
      <div className="flex flex-col items-center mb-4">
        <label className="block mb-2">Select Category:</label>
        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      {newsData.length > 0 && (
        <div>
          <div className="flex flex-col items-center mb-2">
            <h2 className="text-xl font-bold text-black">Top Headlines ({category})</h2>
          </div>
          <ul className="text-left">
            {newsData.map((article) => (
              <li key={article.title} className="mb-2 text-black">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
