import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { profileState } from '../recoil/atom';
import { UpdateButton, RemoveButton } from './route/route';
import { IProfile } from '../type/index';

const Information = () => {
  const profile = useRecoilValueLoadable<object>(profileState);

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    // setProfileRecoil((old) => [
    //   ...old,
    //   {
    //     id: ++profileRecoil.length,
    //     name: e.target.name.value,
    //     age: e.target.age.value,
    //     address: e.target.address.value,
    //     number: e.target.number.value,
    //   },
    // ]);
  };

  return (
    <div className='details'>
      {Object.keys(profile).length ? (
        <ul className='info'>
          <li>이름: {profile.contents.name}</li>
          <li>나이: {profile.contents.age}</li>
          <li>주소: {profile.contents.address}</li>
          <li>연락처: {profile.contents.number}</li>
          {console.log(profile.contents)}
          <UpdateButton contents={profile.contents} />
          <RemoveButton id={profile.contents.id} />
        </ul>
      ) : (
        <p className='emptyset'>정보가 없습니다.</p>
      )}
    </div>
  );
};

export default Information;
