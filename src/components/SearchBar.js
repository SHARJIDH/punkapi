import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
