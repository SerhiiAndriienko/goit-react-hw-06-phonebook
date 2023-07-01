import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    setContactList(state, action) {
      return { ...state, contacts: action.payload };
    },
  },
});

export const setContactListSlice = contactsSlice.actions.setContactList;
export const contactsReducerSlice = contactsSlice.reducer;
