// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import appReducers from './redusers';

// const enhancer = devToolsEnhancer();
// export const store = createStore(appReducers, enhancer);

import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './setContactsList/reducer';
// import { filterReducer } from './setFilters/reducer';
import { filterReducerSlice } from './filterSlice/filterSlice';
import { contactsReducerSlice } from './contactListSlice/contactListSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducerSlice,
    filter: filterReducerSlice,
  },
});
