import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    onSearch(searchTerm.trim());
  };

  return (
    <div className="bg-">
      <div className="mb-3 w-10/12 mx-auto">
        <div className="mt-5 mx-auto flex justify-center items-center">
          <input
            className="border text-sm text-black p-3 w-9/12 rounded-l-full"
            type="text"
            placeholder="Search City, Town, State, Country"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onSearch={searchTerm}
          />
          <button
            className="bg-gray-100 p-3 pr-4 rounded-r-full"
            onClick={search}
          >
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
