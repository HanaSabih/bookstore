import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const InputForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="fixed-bottom pb-3 bg-white border-top">
      <h1>Add New Book</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label className="d-none ">Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Title"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label className="d-none ">Author</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Author"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="w-auto ">Add Book</Button>
        </Row>

      </Form>
    </Container>
  );
};

export default InputForm;
