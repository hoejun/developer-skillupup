import React from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/atom';

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className='search-box'>
      <input
        className='inp-sch'
        type='text'
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
