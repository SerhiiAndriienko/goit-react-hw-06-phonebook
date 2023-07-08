return (
  <ul>
    {(() => {
      if (contactList[0] === undefined) {
        return (
          <span
            style={{
              fontStyle: 'italic',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Your phonebook is empty
          </span>
        );
      } else if (filterContacts === '') {
        return contactList.map(contact => (
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
        ));
      } else {
        return contactList
          .filter(contact =>
            contact.name.toLowerCase().includes(filterContacts.toLowerCase())
          )
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
          ));
      }
    })()}
  </ul>
);
