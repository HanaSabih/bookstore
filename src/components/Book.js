import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Book = (book) => {
  const { title, author } = book;

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <Card.Text className="book-author">{author}</Card.Text>
        <Button variant="btn btn-outline-primary me-2 border-0">Delete</Button>
        <Button variant="btn btn-outline-primary border-0">Edit</Button>
      </Card.Body>

    </Card>
  );
};
export default Book;
