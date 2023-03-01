import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const bookNames = useSelector((state) => state.books);
  return (
    <>
      <section className="book-list">

        <Container>
          {bookNames.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
            />
          ))}
        </Container>
        <Form />
      </section>
    </>
  );
};

export default Home;
