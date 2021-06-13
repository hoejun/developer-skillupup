import React, { useState } from 'react';
import axios from 'axios';

const UpdateButton = (contents: any) => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState({
    id: 0,
    name: '',
    age: 0,
    address: '',
    number: '',
  });
  const { name, age, address, number } = text;

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
      number: contents.contents.number,
    });
    if (!toggle) {
      setToggle(true);
    } else {
      axios
        .patch(`http://localhost:3000/user/${contents.contents.id}`, {
          name: text.name,
          age: text.age,
          address: text.address,
          number: text.number,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setToggle(false);
    }
  };
  return (
    <div>
      {/* <button type='button' onClick={() => onHandleUpdate}>
        수정
      </button>
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
      </form> */}
      {toggle ? (
        <div>
          <input onChange={onHandleChange} value={name} name='name' />
          <input onChange={onHandleChange} value={age} name='age' />
          <input onChange={onHandleChange} value={address} name='address' />
          <input onChange={onHandleChange} value={number} name='number' />
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
