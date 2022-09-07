import React from 'react';

const SearchBar = (props) => {
  const { fetchGiphy } = props;
  const handleChange = (event) => {
    // get the keyword (handleChange is a callback function of an EventListener)
    const inputElement = event.currentTarget;
    const keyword = inputElement.value;
    fetchGiphy(keyword);
  };

  return (
    <div>
      <input type="text" className="form-search form-control" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
