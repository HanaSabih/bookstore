import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { asyncRemove } from '../redux/books/apiSlice';

const Book = (book) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <Card.Text className="book-author">{author}</Card.Text>
        <Button
          variant="btn btn-outline-primary me-2 border-0"
          onClick={() => dispatch(asyncRemove(id))}
        >
          Delete
        </Button>
        <Button variant="btn btn-outline-primary border-0">Edit</Button>
      </Card.Body>

    </Card>
  );
};
export default Book;
