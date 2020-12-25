import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const DEFAULT_IMG = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

function Book(props) {
  const book = props.book;
  const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : DEFAULT_IMG;

  return (
    <Col>
      <Card style={{ width: '120px' }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ width: '120px' }}
        />

        <Card.Body>
          <Card.Title>{book.volumeInfo.title}</Card.Title>

          <Card.Text>
            {book.volumeInfo.description.substring(0, 200)}...
          </Card.Text>

          <Button href={book.volumeInfo.previewLink} variant="primary">
            View Book
           </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Book;
