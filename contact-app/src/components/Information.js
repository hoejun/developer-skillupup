import React, { useState, useEffect } from 'react';
import '../App.css';

const Information = (props) => {
  // const [profileValue, setProfileValue] = useState([]);

  // useEffect(() => {
  //   setProfileValue(props.infoList);
  // }, []);
  return (
    <div className='details'>
      <ul className='info'>
        <li>이름: {props.infoList.name}</li>
        <li>나이: {props.infoList.age}</li>
        <li>주소: {props.infoList.address}</li>
        <li>연락처: {props.infoList.number}</li>
      </ul>
      {/* <p className='emptyset'>
        연락처 정보
        {props.infoList.name}
        {props.infoList.age}
        {props.infoList.address}
        {props.infoList.number}
      </p> */}
    </div>
  );
};

export default Information;
