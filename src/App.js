// App.js

import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import NewsFeed from './components/NewsFeed';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* News Section */}
        <div className="card news-section">
          <h2 className="text-2xl font-bold mb-4">News Section</h2>
          <NewsFeed />
        </div>

        {/* Weather Section */}
        <div className="card weather-section">
          <h2 className="text-2xl font-bold mb-4">Weather Section</h2>
          <WeatherWidget />
        </div>

        {/* To-Do Section */}
        <div className="card todo-section">
          <h2 className="text-2xl font-bold mb-4">To-Do Section</h2>
          <TaskManager />
        </div>
      </header>
    </div>
  );
}

export default App;
