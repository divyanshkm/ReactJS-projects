import React from "react";

const Search = (props) => {
  const { searchTerm, setSearchTerm } = props;

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Search;
