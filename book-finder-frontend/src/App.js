import React, { useState } from "react";
import { Container, Navbar, Alert } from 'react-bootstrap';
import axios from 'axios';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios('http://localhost:3000/books?search_term=' + query)
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error.message);
        } else {
          setBooks(response.data.items);
        }
      });
  };

  return (
    <Container fluid>
      <Navbar
        fixed="top"
        className="bg-dark justify-content-end"
      >
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            placeholder="Search..."
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </Navbar>

      <div
        className="d-flex flex-wrap"
        style={{ 'marginTop': '60px' }}>
          {error && (<Alert key='error' variant='danger'>{error}</Alert>)}

          {
            !error && books.length > 0 && books.map(book => (
              <Book key={book.id} book={book}></Book>
            ))
          }
      </div>
    </Container>
  );
}

export default App;
