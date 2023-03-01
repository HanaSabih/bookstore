import { createAsyncThunk } from '@reduxjs/toolkit';
import { createBook, removeBook, loadBooks } from './booksSlice';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ly7EjLST3SRMuHeAdrkj/books';
const POST_BOOK = 'books/POST_BOOK';
const GET_BOOKS = 'books/GET_BOOK';
const DELETE_BOOK = 'books/DELETE_BOOK';

export const asyncAdd = createAsyncThunk(
  POST_BOOK,
  async (book, thunkAPI) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.text();
    thunkAPI.dispatch(createBook(book));
    return data;
  },
);

export const asyncLoad = createAsyncThunk(
  GET_BOOKS,
  async (_, thunkAPI) => {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();

    thunkAPI.dispatch(loadBooks(data));
    return data;
  },
);

export const asyncRemove = createAsyncThunk(
  DELETE_BOOK,
  async (bookId, thunkAPI) => {
    const response = await fetch(`${baseUrl}/${bookId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: bookId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.text();
    thunkAPI.dispatch(removeBook(bookId));
    return data;
  },
);
