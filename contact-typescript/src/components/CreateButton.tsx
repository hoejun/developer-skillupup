import React from 'react';
import { useRecoilState } from 'recoil';
import { profileState } from '../recoil/atom';
import { IInformation } from '../type/index';

const CreateButton = () => {
  const [profileRecoil, setProfileRecoil] =
    useRecoilState<IInformation[]>(profileState);
  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  // const onCreate = () => {};

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    setProfileRecoil((old) => [
      ...old,
      {
        id: profileRecoil.length,
        name: e.target.name.value,
        age: e.target.age.value,
        address: e.target.address.value,
        number: e.target.number.value,
      },
    ]);
  };
  return (
    <div>
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
