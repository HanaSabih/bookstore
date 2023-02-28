import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Book from './Book';
import InputForm from './Form';

const Home = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <section className="book-list">

        <Container>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
            />
          ))}
        </Container>
        <InputForm />
      </section>
    </>
  );
};

export default Home;
