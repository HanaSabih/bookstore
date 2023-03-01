import { useDispatch } from 'react-redux';
import { useState } from 'react';
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { asyncAdd } from '../redux/books/apiSlice';

const InputForm = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (!(book.title.trim() && book.author.trim())) {
      return;
    }

    dispatch(
      asyncAdd({
        item_id: uuid().replaceAll('-', ''),
        title: book.title,
        author: book.author,
        category: '',
      }),
    );

    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <Container className="fixed-bottom pb-3 bg-white border-top">
      <h1>Add New Book</h1>
      <Form onSubmit={handleBook}>
        <Row className="mb-3">
          <Form.Group as={Col} md="5">
            <Form.Label className="d-none ">Title</Form.Label>
            <Form.Control
              required
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              defaultValue=""
              value={book.title}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="5">
            <Form.Label className="d-none ">Author</Form.Label>
            <Form.Control
              required
              id="author"
              name="author"
              type="text"
              placeholder="Author"
              defaultValue=""
              value={book.author}
              onChange={handleInput}
            />
          </Form.Group>
          <Button type="submit" className="w-auto ">Add Book</Button>
        </Row>

      </Form>
    </Container>
  );
};
export default InputForm;
