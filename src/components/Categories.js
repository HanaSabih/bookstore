import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categoriesRes = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleStatusCheck = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories-page">
      <button
        className="status-btn btn"
        type="button"
        onClick={handleStatusCheck}
      >
        CHECK STATUS
      </button>
      <h1>{categoriesRes}</h1>
    </div>
  );
};

export default Categories;
