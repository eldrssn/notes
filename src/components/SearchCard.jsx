import React from 'react';
import { Input } from 'antd';

const SearchCard = ({setSearchValue}) => {

  const { Search } = Input;  

  return (
    <Search 
        placeholder="Search" 
        allowClear
        enterButton="Search"
        size="large" 
        onSearch={(value) => setSearchValue(value)}
      />
  );
};

export default SearchCard;