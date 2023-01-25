import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSetQuery }) => {
  const input = useRef();

  const handleInput = () => {
    onSetQuery(input.current.value);
  };
  return (
    <div className="notes-search-container">
      <input
        ref={input}
        onInput={handleInput}
        placeholder="Search Notes..."
        className="notes-search"
      />
      {/* <button onClick={{ handleInput }}>
        <SearchIcon />
      </button> */}
    </div>
  );
};

export default SearchBar;
