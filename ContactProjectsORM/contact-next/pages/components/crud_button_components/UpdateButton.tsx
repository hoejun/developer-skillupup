import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { profileState } from '../../recoil/recoilAPI';
import { requests } from '../../config/api';
import { IProfile } from '../../type/interfaces';

interface IProfileProps {
  contents: IProfile;
}

const UpdateButton = ({ contents }: IProfileProps) => {
  const setProfile = useSetRecoilState<IProfile[]>(profileState);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState({
    id: 0,
    name: '',
    age: 0,
    address: '',
    phone: '',
  });
  const { name, age, address, phone } = text;

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const onHandleToggle = () => {
    setText({
      id: contents.id,
      name: contents.name,
      age: contents.age,
      address: contents.address,
      phone: contents.phone,
    });
    if (!toggle) {
      setToggle(true);
    } else {
      requests
        .patch(`user/${contents.id}`, {
          id: text.id,
          name: text.name,
          age: text.age,
          address: text.address,
          phone: text.phone,
        })
        .then((res) => {
          setProfile(res.data);
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
          <input onChange={onHandleChange} value={phone} name='phone' />
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
