import React, { useState, useEffect } from 'react';
import './App.css'; // Don't forget to import the CSS!

// 1. Separate component with its own local state
function CoinCard({ name, symbol, price }) {
  // Local state to track if the user clicked the button
  const [isTracking, setIsTracking] = useState(false);

  return (
    <div className="card">
      <h3>{name} ({symbol})</h3>
      <p>Price: ${price}</p>
      <button 
        className={isTracking ? "btn-tracking" : "btn-untracked"}
        onClick={() => setIsTracking(!isTracking)}
      >
        {isTracking ? "✅ Tracking Active" : "➕ Start Tracking"}
      </button>
    </div>
  );
}

// 2. Main Application Component
function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the top 6 cryptocurrencies from a free, no-key-required API
    fetch('https://api.coinlore.net/api/tickers/?limit=6')
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.data); // The API returns an object with a 'data' array
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching market data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Market Dashboard 📈</h1>
      
      {loading ? (
        <p>Connecting to market...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="grid">
          {/* Mapping the fetched data to our separate components */}
          {coins.map((coin) => (
            <CoinCard 
              key={coin.id} 
              name={coin.name} 
              symbol={coin.symbol} 
              price={coin.price_usd} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;