import React from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/atom';

const Search = () => {
  const [searchRecoil, setSearchRecoil] = useRecoilState(searchState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRecoil(event.target.value);
    console.log(searchRecoil);
  };

  return (
    <div className='search-box'>
      <input
        className='inp-sch'
        type='text'
        value={searchRecoil}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
