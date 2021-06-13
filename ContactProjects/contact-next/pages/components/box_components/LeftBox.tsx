import React from 'react';
import { Search, ProfileList } from '../route/route';

const LeftBox = () => {
  return (
    //api 호출

    <div className='col left'>
      <Search />
      <ProfileList />
    </div>
  );
};

export default LeftBox;
