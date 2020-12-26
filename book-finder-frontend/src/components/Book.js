import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DEFAULT_IMG_URL = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

function Book({ book }) {
  const image_url = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : DEFAULT_IMG_URL;

  return (
    <Card
      style={{ width: '250px', margin: '0 5px' }}>
      <Card.Img
        variant="top"
        src={image_url}
        style={{ width: '100%' }}
      />

      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>

        <Card.Text>
          {book.volumeInfo.description ? book.volumeInfo.description.substring(0, 200) : ''}...
        </Card.Text>

        <Button
          href={book.volumeInfo.previewLink}
          variant="primary"
          target="_blank"
        >
          View Book
         </Button>
      </Card.Body>
    </Card>
  );
}

export default Book;
