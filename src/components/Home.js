import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const bookNames = useSelector((state) => state.books);
  return (
    <Container className="lightGreyBg">
      <Container className="mt-3 px-0 bookListContainer">
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
    </Container>
  );
};

export default Home;
