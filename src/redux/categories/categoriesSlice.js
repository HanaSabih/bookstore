const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  status: [],
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { status: 'Under construction' };
    default:
      return state;
  }
};

export default categoriesReducer;