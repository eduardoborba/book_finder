import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Books from './components/Books';

function App() {
  const [books, setBooks] = useState({ books: [] });
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios('http://localhost:3000/books?search_term=' + query)
      .then((response) => {
        setBooks({
          books: response.data
        });
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              placeholder="Search..."
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </form>
        </Col>
      </Row>
      <Books books={books} />
    </Container>
  );
}

export default App;
