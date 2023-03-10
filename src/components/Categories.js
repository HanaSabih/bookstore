import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
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

    </div>
  );
};

export default Categories;
