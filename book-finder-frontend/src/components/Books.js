import { Row, Col } from 'react-bootstrap';
import Book from './Book';

function Books(props) {
  const books = props.books;

  return (
    <Row>
      {
        books.map(book => (
          <Col>
            <Book book={book}></Book>
          </Col>
        ))
      }
    </Row>
  );
}

export default Books;
