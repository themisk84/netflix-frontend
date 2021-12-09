import React from "react";

const SearchContent = ({ onSubmitForm, country, setCountry }) => {
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="year">Country</label>
        <input type="text" id="year" value={country} onChange={setCountry} />
      </form>
    </div>
  );
};

export default SearchContent;
