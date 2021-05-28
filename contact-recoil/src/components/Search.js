import React from 'react';
import { useRecoilState } from 'recoil';
import { ProfileInfoState } from '../recoil/atom';
import '../App.css';

const Search = () => {
  const [inputRecoil, setInputRecoil] = useRecoilState(ProfileInfoState);

  const handleChange = (event) => {
    setInputRecoil(event.target.value);
  };

  return (
    <div className='search-box'>
      <input
        className='inp-sch'
        type='text'
        value={inputRecoil}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
