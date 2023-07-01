import { useEffect } from 'react';
import './App.css';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setFilterSlice } from 'redux/filterSlice/filterSlice';
// import { setContactsList } from 'redux/setContactsList/actions';
import { setContactListSlice } from 'redux/contactListSlice/contactListSlice';

export default function App() {
  const contactList = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('contacts'));
    if (getFromStorage) {
      dispatch(setContactListSlice(getFromStorage));
    }
  }, [dispatch]);

  const filterChange = filterValue => {
    dispatch(setFilterSlice(filterValue));
  };

  const handleValueChange = array => {
    dispatch(setContactListSlice(array));
  };

  const onDeleteContact = contactId => {
    const newArray = contactList.filter(contact => contact.id !== contactId);
    handleValueChange(newArray);
    if (newArray.length === 0) {
      localStorage.removeItem('contacts');
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleValueChange={handleValueChange}></ContactForm>

      <h2>Contacts</h2>
      <Filter filter={filterContacts} filterChange={filterChange}></Filter>
      <ContactList onDeleteContact={onDeleteContact}></ContactList>
    </div>
  );
}
