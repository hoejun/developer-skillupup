import React from 'react';
import '../App.css';

const ProfileInfoList = (props) => {
  const onClickInformation = () => {
    props.onHandleButton(props.info);
  };
  return (
    <li>
      <button
        type='button'
        className='selected'
        // value={props.info}
        onClick={onClickInformation}
      >
        {props.info.name}
      </button>
    </li>
  );
};

export default ProfileInfoList;
