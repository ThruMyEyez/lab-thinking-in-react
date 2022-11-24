import { useState } from 'react';
const SearchBar = ({ filterSearch, inStock }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    filterSearch(e.target.value);
  };
  const handleCheckbox = (e) => {
    inStock(e.target.value);
  };

  return (
    <div style={{ margin: '1.5rem auto', textAlign: 'center' }}>
      <h4>Search</h4>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleSearchInput}
      />
      <div>
        <input type="checkbox" name="inStock" onChange={handleCheckbox} />
        <label htmlFor="inStock">Only show products in Stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
