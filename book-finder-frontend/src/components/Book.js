import { Card, Button } from 'react-bootstrap';

function Book(props) {
  const book = props.book;

  return (
    <Card style={{ width: '12rem' }}>
      {book.volumeInfo.imageLinks &&
        <Card.Img
          variant="top"
          src={book.volumeInfo.imageLinks.thumbnail}
          style={{ width: '12rem', height: '16rem' }}
        />
      }

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
  );
}

export default Book;
