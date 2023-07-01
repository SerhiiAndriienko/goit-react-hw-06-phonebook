import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function ContactList({ onDeleteContact }) {
  const contactList = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter.filter);
  useEffect(() => {
    if (contactList !== undefined && contactList.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contactList));
    }
  }, [contactList]);

  return (
    <ul>
      {contactList[0] === undefined ? (
        <span
          style={{
            fontStyle: 'Italic',
            textAlign: 'center',
            display: 'block',
          }}
        >
          Your phonebook is empty
        </span>
      ) : filterContacts === '' ? (
        contactList.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        contactList
          .filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(filterContacts.toLowerCase());
          })
          .map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          ))
      )}
    </ul>
  );
}
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
