import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilters } from 'redux/filterSlice/filterSlice';
function Filter({ filterChange }) {
  const filterContacts = useSelector(getFilters);
  const handleFilterChange = event => {
    filterChange(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="text"
        autoComplete="off"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
        value={filterContacts}
      />
    </div>
  );
}
Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
export default Filter;
