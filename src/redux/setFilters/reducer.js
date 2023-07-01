import { createReducer } from '@reduxjs/toolkit';
import { setfilters } from './actions';

const filterState = {
  filter: '',
};

export const filterReducer = createReducer(filterState, {
  [setfilters]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

// export const filterReducer = (state = filterState, action) => {
//   switch (action.type) {
//     case 'SET_FILTERS':
//       console.log(filterState);
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };
