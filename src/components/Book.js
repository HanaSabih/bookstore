import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { asyncRemove } from '../redux/books/apiSlice';

const Book = (book) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  return (
    <Card className="mb-3 flex-row ">

      <Card.Body>
        <Card.Text className="book-author text-secondary fw-bold mb-1">Action</Card.Text>
        <Card.Title className="book-title fw-bold mb-0">{title}</Card.Title>
        <Card.Text className="book-author text-primary mb-1">{author}</Card.Text>
        <Button variant="btn btn-outline-primary border-0 ps-0">Comment</Button>
        <div className="vr" />
        <Button
          variant="btn btn-outline-primary me-2 border-0"
          onClick={() => dispatch(asyncRemove(id))}
        >
          Remove
        </Button>
        <div className="vr" />
        <Button variant="btn btn-outline-primary border-0">Edit</Button>
      </Card.Body>
      <Card.Body className=" ms-5 ps-5">

        <div className="progress blue bg-white ps-5">
          <span className="progress-left">
            <span className="progress-bar" />
          </span>
          <span className="progress-right">
            <span className="progress-bar" />
          </span>

        </div>
        <div className="">
          <div className="progress-value fs-2">90%</div>
          <div className="text-secondary fs-5">completed</div>
        </div>
      </Card.Body>
      <div className="vr my-4" />
      <Card.Body className="ms-5">

        <p className="mb-0 text-secondary ">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <Button variant="btn btn-primary px-5 rounded-0">Update progress</Button>

      </Card.Body>
    </Card>
  );
};
export default Book;
