import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Book from './Book';
import InputForm from './Form';

const booksArr = [
  { id: 1, title: 'Cheque book', author: 'Vasdev Mohi' },
  { id: 2, title: 'The Overstory', author: 'Richard Powers' },
  { id: 3, title: 'The Braille edition of the book Exam Warriors', author: 'PM Narendra Modi' },
];

const Home = () => {
  const [state] = useState(booksArr);
  return (
    <>
      <section className="book-list">

        <Container>
          {state.map((booksArr) => (
            <Book
              key={booksArr.id}
              title={booksArr.title}
              author={booksArr.author}
            />
          ))}
        </Container>
        <InputForm />
      </section>
    </>
  );
};

export default Home;
