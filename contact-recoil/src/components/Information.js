import React from 'react';
import { useRecoilValue } from 'recoil';
import { infoState } from '../recoil/atom';

import '../App.css';
const Information = () => {
  const infoData = useRecoilValue(infoState);
  return (
    <div className='details'>
      <ul className='info'>
        <li>이름: {infoData.name}</li>
        <li>나이: {infoData.age}</li>
        <li>주소: {infoData.address}</li>
        <li>연락처: {infoData.number}</li>
      </ul>
    </div>
  );
};

export default Information;
