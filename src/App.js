import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
import NoPage from './components/NoPage';
import Navbars from './components/Navbar';
import Home from './components/Home';
import { asyncLoad } from './redux/books/apiSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(asyncLoad());
  return (
    <Routes>

      <Route path="/" element={<Navbars />}>
        <Route index element={<Home />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
