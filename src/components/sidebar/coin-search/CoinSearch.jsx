import React from "react";
import styled from "styled-components";

const Search = styled.div`
  text-align: center;
  margin-top: 10px;

  & input {
    padding: 10px;
  }
`;

function CoinSearch() {
  return (
    <Search>
      <input type="text" placeholder="Search..." />
    </Search>
  );
}

export default CoinSearch;
