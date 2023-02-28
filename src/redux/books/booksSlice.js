import uuid from 'react-uuid';

const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';

const initialState = {

  books: [
    {
      id: uuid(),
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
    },
    {
      id: uuid(),
      title: 'Ulysses',
      author: 'James Joyce',
    },
    {
      id: uuid(),
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
    },
  ],
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const createBook = (payload) => ({
  type: CREATE_BOOK,
  payload,
});
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.slice(0, action.payload),
          ...state.books.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
export default booksReducer;
