import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id, title, author } = book;
  const books = useSelector((state) => state.books.books);
  const handleDelete = (ind) => {
    const index = books.findIndex((bookItem) => bookItem.id === ind);
    dispatch(removeBook(index));
  };
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <Card.Text className="book-author">{author}</Card.Text>
        <Button variant="btn btn-outline-primary me-2 border-0" onClick={() => handleDelete(id)}>Delete</Button>
        <Button variant="btn btn-outline-primary border-0">Edit</Button>
      </Card.Body>

    </Card>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
