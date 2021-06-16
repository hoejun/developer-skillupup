import React from 'react';
import { useRecoilValue } from 'recoil';
import { informationState } from '../recoil/recoilAPI';
import { UpdateButton, RemoveButton } from './route/route';
import { IProfile } from '../type/interfaces';

const Information = () => {
  const Information = useRecoilValue<IProfile | undefined>(informationState);

  return (
    <div className='details'>
      {Information ? (
        <ul className='info'>
          <li>이름: {Information.name}</li>
          <li>나이: {Information.age}</li>
          <li>주소: {Information.address}</li>
          <li>연락처: {Information.phone}</li>
          <UpdateButton contents={Information} />
          <RemoveButton contents={Information} />
        </ul>
      ) : (
        <p className='emptyset'>정보가 없습니다.</p>
      )}
    </div>
  );
};

export default Information;
