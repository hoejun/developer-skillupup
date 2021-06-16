import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  profileState,
  responseState,
  informationState,
} from '../../recoil/recoilAPI';
import { requests } from '../../config/api';
import { IProfile } from '../../type/index';

const UpdateButton = (contents: any) => {
  const [toggle, setToggle] = useState(false);
  const [responseValue, setResponseValue] = useRecoilState(responseState);
  const [Information, setInformation] =
    useRecoilState<IProfile | undefined>(informationState);

  const [text, setText] = useState({
    id: 0,
    name: '',
    age: 0,
    address: '',
    phone: '',
  });
  const { name, age, address, phone } = text;

  const onHandleChange = (e: any) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const onHandleToggle = () => {
    setText({
      id: contents.contents.id,
      name: contents.contents.name,
      age: contents.contents.age,
      address: contents.contents.address,
      phone: contents.contents.phone,
    });
    if (!toggle) {
      setToggle(true);
    } else {
      requests
        .patch(`user/${contents.contents.id}`, {
          id: text.id,
          name: text.name,
          age: text.age,
          address: text.address,
          phone: text.phone,
        })
        .then((res) => {
          setResponseValue(res.data);
          //초기화
          // setText({
          //   id: 0,
          //   name: '',
          //   age: 0,
          //   address: '',
          //   number: '',
          // });
        })
        .catch((error) => {
          console.log(error);
        });
      setToggle(false);
    }
  };
  return (
    <div>
      {toggle ? (
        <div>
          <input onChange={onHandleChange} value={name} name='name' />
          <input onChange={onHandleChange} value={age} name='age' />
          <input onChange={onHandleChange} value={address} name='address' />
          <input onChange={onHandleChange} value={phone} name='number' />
        </div>
      ) : (
        false
      )}
      <button type='submit' onClick={onHandleToggle}>
        {toggle ? '완료' : '수정'}
      </button>
    </div>
  );
};

export default UpdateButton;
