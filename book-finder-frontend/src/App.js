import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Book from './Book/Book';

function App() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios('http://localhost:3000/books?search_term=' + query);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <ul>
          {data.items.map(item => (
            <Book book={item}></Book>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
