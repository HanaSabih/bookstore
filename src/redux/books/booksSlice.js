const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';
const LOAD_BOOKS = 'LOAD_BOOKS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      const bookArr = [];
      Object.entries(action.books).forEach(([key, value]) => {
        bookArr.push({
          item_id: key,
          title: value[0].title,
          category: '',
          author: value[0].author,
        });
      });
      return bookArr;
    }

    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => book.item_id !== action.bookId);
      return filteredBooks;
    }
    default:
      return state;
  }
};

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default booksReducer;
