import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    setContactList(state, action) {
      return { ...state, contacts: action.payload };
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const setContactListSlice = contactsSlice.actions.setContactList;

// Selector
export const getContactList = state => state.contacts.contacts;
