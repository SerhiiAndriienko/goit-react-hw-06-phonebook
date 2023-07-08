import { createReducer } from '@reduxjs/toolkit';
import { setContactsList } from './actions';

const contactsState = {
  contacts: [],
};

export const contactsReducer = createReducer(contactsState, {
  [setContactsList]: (state, action) => ({
    ...state,
    contacts: action.payload,
  }),
});

// const contactsState = {
//   contacts: [],
// };

// export const contactsReducer = (state = contactsState, action) => {
//   switch (action.type) {
//     case 'SET_CONTACTS_LIST':
//       return { ...state, contacts: action.payload };
//     default:
//       return state;
//   }
// };
