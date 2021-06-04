import React, { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { informationState, profileState } from '../recoil/atom';
import { IInformation } from '../type/index';
// import '../App.css';

const Information = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const informationRecoil =
    useRecoilValue<IInformation | undefined>(informationState);
  const setProfileRecoil = useResetRecoilState(profileState);

  const onHandleChange = () => {};
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
    // console.log(profileRecoil);
  };
  const onHandleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className='details'>
      {informationRecoil ? (
        <ul className='info'>
          <li>이름: {informationRecoil.name}</li>
          <li>나이: {informationRecoil.age}</li>
          <li>주소: {informationRecoil.address}</li>
          <li>연락처: {informationRecoil.number}</li>
          <div>
            <form onSubmit={onHandleSubmit}>
              {toggle ? (
                <div>
                  <input onChange={onHandleChange} value={text} name='text' />
                  <input onChange={onHandleChange} value={text} name='text' />
                  <input onChange={onHandleChange} value={text} name='text' />
                  <input onChange={onHandleChange} value={text} name='text' />
                </div>
              ) : (
                false
              )}
              <button type='submit' onClick={onHandleToggle}>
                {toggle ? '완료' : '수정'}
              </button>
            </form>
          </div>
        </ul>
      ) : (
        <p className='emptyset'>정보가 없습니다.</p>
      )}
    </div>
  );
};

export default Information;
