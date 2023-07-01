import React, { useState } from 'react';

const CityFilter = ({ onFilterChange }) => {
  const [searchCity, setSearchCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFilterChange(searchCity);
  };

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <label className='searchCityLabel'>
        <input
          type="text"
          className='searchCityInput'
          placeholder='Introduce tu ciudad'
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </label>
      <button className='submitButton' type='submit'>Buscar</button>
    </form>
  );
};

export default CityFilter;
