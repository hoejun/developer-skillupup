import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { profileState, responseState } from '../../recoil/recoilAPI';
import { IProfile } from '../../type/index';
import { requests } from '../../config/api';

const CreateButton = () => {
  // const [profileRecoil, setProfileRecoil] =
  //   useRecoilState<IProfile[]>(profileState);
  const [responseValue, setResponseValue] = useRecoilState(responseState);
  const [text, setText] = useState<IProfile>({
    id: 0,
    name: '',
    age: 0,
    address: '',
    phone: '',
  });

  const { id, name, age, address, phone } = text;

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText({
      ...text,
      id: responseValue.length + 1, //숫자
      [name]: value,
    });
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requests
      .post('user', {
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
        //   phone: '',
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='contact-add'>
      <form onSubmit={onHandleSubmit}>
        <div>
          <input name='name' onChange={onHandleChange} />
          <input name='age' onChange={onHandleChange} />
          <input name='address' onChange={onHandleChange} />
          <input name='phone' onChange={onHandleChange} />
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default CreateButton;
