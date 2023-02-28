import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

const InputForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleBook = (title, author) => {
    const book = {
      id: uuid(),
      title,
      author,
    };
    dispatch(createBook(book));
  };
  return (
    <Container className="fixed-bottom pb-3 bg-white border-top">
      <h1>Add New Book</h1>
      <Form onSubmit={(e) => {
        e.preventDefault();

        handleBook(title, author);
        setTitle('');
        setAuthor('');
      }}
      >
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-auto ">Add Book</Button>
        </Row>

      </Form>
    </Container>
  );
};

export default InputForm;
