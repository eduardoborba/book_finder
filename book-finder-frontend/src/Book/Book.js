import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Book(props) {
  const book = props.book;

  return (
    <Card style={{ width: '18rem' }}>
      {book.volumeInfo.imageLinks &&
        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
      }

      <Card.Body>

        <Card.Title>{book.volumeInfo.title}</Card.Title>

        <Card.Text>
          {book.volumeInfo.description}
        </Card.Text>

        <Button href={book.volumeInfo.previewLink} variant="primary">View Book</Button>
      </Card.Body>
    </Card>
  );
}

export default Book;
