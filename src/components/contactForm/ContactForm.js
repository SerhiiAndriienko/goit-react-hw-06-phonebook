import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useSelector } from 'react-redux';

export default function ContactForm({ handleValueChange }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactList = useSelector(state => state.contacts.contacts);
  // const filterContacts = useSelector(state => state.filter);

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const addContact = e => {
    e.preventDefault();
    const newContactName = name;
    let isContactExist = null;
    if (contactList[0] !== undefined) {
      isContactExist = contactList.some(
        contact => contact.name === newContactName
      );

      if (isContactExist) {
        alert(`${newContactName} is already in contacts.`);
        return;
      }
      const newContact = {
        name: name,
        number: number,
        id: nanoid(),
      };
      const newArray = [...contactList, newContact];
      handleValueChange(newArray);
    } else {
      const newContact = {
        name: name,
        number: number,
        id: nanoid(),
      };
      const newArray = [newContact, ...contactList];
      handleValueChange(newArray);
    }

    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: John, Anne-Marie, Charles O'Connell"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="number"
            pattern="[0-9+\- ]+"
            title="Phone number must consist of digits and can contain spaces, dashes, parentheses, and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
ContactForm.propTypes = {
  handleValueChange: PropTypes.func.isRequired,
};
