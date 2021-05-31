import React from 'react';
import '../App.css';

const Information = (props) => {
  return (
    <div className='details'>
      <ul className='info'>
        <li>이름: {props.infoList.name}</li>
        <li>나이: {props.infoList.age}</li>
        <li>주소: {props.infoList.address}</li>
        <li>연락처: {props.infoList.number}</li>
      </ul>
    </div>
  );
};

export default Information;
