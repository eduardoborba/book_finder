import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Books from './components/Books';

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
    <Container fluid>
      <Row>
        <Col>
          <input value={query} onChange={e => setQuery(e.target.value)} />
        </Col>
      </Row>
      <Books books={data.items} />
    </Container>
  );
}

export default App;
