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
    <Container className="fixed-bottom pb-5 lightGreyBg border-top " id="contform">
      <h2 className="text-secondary py-2">Add New Book</h2>
      <Form onSubmit={handleBook}>
        <Row className="mb-3 justify-content-between">
          <Form.Group as={Col} md="5">
            <Form.Label className="d-none ">Title</Form.Label>
            <Form.Control
              required
              id="title"
              className="rounded-0"
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
              className="rounded-0 ps-2"
              name="author"
              type="text"
              placeholder="Author"
              defaultValue=""
              value={book.author}
              onChange={handleInput}
            />
          </Form.Group>
          <Button type="submit" className="w-auto   rounded-0 px-5 ">Add Book</Button>
        </Row>

      </Form>
    </Container>
  );
};
export default InputForm;
