import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { profileState, responseState } from '../../recoil/recoilAPI';
import { IProfile } from '../../type/index';
import { requests } from '../../config/api';

interface IProfileProps {
  handleData: (form: {
    id: number;
    name: string;
    age: number;
    address: string;
    number: string;
  }) => void;
}

const CreateButton = () => {
  // const [profileRecoil, setProfileRecoil] =
  //   useRecoilState<IProfile[]>(profileState);
  const [responseValue, setResponseValue] = useRecoilState(responseState);
  const [text, setText] = useState<IProfile>({
    id: 0,
    name: '',
    age: 0,
    address: '',
    number: '',
  });

  const { id, name, age, address, number } = text;

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setText({
      ...text,
      id: responseValue.length + 1, //숫자
      [name]: value,
    });
  };
  const onSubmit = (form: {
    id: number;
    name: string;
    age: number;
    address: string;
    number: string;
  }) => {
    console.log(typeof form.age);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
    console.log(text);
    requests
      .post('user', {
        text,
      })
      .then((res) => {
        console.log(res);
        // setResponseValue(res.data);
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
  };

  return (
    <div className='contact-add'>
      <form onSubmit={onHandleSubmit}>
        <div>
          <input type='text' name='name' onChange={onHandleChange} />
          <input type='number' name='age' onChange={onHandleChange} />
          <input type='text' name='address' onChange={onHandleChange} />
          <input type='text' name='number' onChange={onHandleChange} />
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default CreateButton;
