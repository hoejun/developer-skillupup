import React from 'react';
import { useRecoilState } from 'recoil';
import { profileState } from '../../recoil/atom';
import { IProfile } from '../../type/index';
import axios from 'axios';

const CreateButton = () => {
  // const [profileRecoil, setProfileRecoil] =
  //   useRecoilState<IProfile[]>(profileState);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/user', {
        name: e.target.name.value,
        age: e.target.age.value,
        address: e.target.address.value,
        number: e.target.number.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.request._response);
      });
  };

  return (
    <div className='contact-add'>
      <form onSubmit={onHandleSubmit}>
        <div>
          <input type='text' name='name' onChange={onHandleChange} />
          <input type='text' name='age' onChange={onHandleChange} />
          <input type='text' name='address' onChange={onHandleChange} />
          <input type='text' name='number' onChange={onHandleChange} />
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default CreateButton;
