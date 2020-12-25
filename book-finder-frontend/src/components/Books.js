import React from 'react';
import { Row } from 'react-bootstrap';
import Book from './Book';

function Books(props) {
  const books = props.books;

  return (
    <Row>
      {
        books.length > 0 && books.map(book => (
          <Book key={book.id} book={book}></Book>
        ))
      }
    </Row>
  );
}

export default Books;
