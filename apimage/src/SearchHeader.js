import React from "react";

const SearchHeader = ({ Search }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    Search("bat");
  };

  return (
    <>
      <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
          <label>Ne Arıyorsunuz?</label>
          <input />
        </form>
      </div>
    </>
  );
};

export default SearchHeader;
