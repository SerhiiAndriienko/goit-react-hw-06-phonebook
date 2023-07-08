import './App.css';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setFilterSlice } from 'redux/filterSlice/filterSlice';
import { getFilters } from 'redux/filterSlice/filterSlice';
import { setContactListSlice } from 'redux/contactListSlice/contactListSlice';
import { getContactList } from 'redux/contactListSlice/contactListSlice';

export default function App() {
  const contactList = useSelector(getContactList);
  const filterContacts = useSelector(getFilters);
  const dispatch = useDispatch();
  const filterChange = filterValue => {
    dispatch(setFilterSlice(filterValue));
  };

  const handleValueChange = array => {
    dispatch(setContactListSlice(array));
  };

  const onDeleteContact = contactId => {
    const newArray = contactList.filter(contact => contact.id !== contactId);
    handleValueChange(newArray);
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
