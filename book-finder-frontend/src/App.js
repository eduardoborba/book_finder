import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios('http://localhost:3000/books?search_term=Harry Potter');
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          variant="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <ul>
          {data && data.items.map(item => (
            <li key={item.id}>
              <a href={item.selfLink}>{item.volumeInfo.title}</a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
