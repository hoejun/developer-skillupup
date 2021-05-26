import React, { useState } from 'react';
import '../App.css';
import Information from './Information';

const ProfileInfoList = (props) => {
  // const [info, setInfo] = useState('');
  const [infoList, setInfoList] = useState([]);

  const onClickInformation = () => {
    // setInfo(props.info.name);
    setInfoList(props.info);
    props.onHandleButton(infoList);
  };

  return (
    <li>
      {/* <button type='button' value={infoList} onClick={onClickInformation}> */}
      <button type='button' value={infoList} onClick={onClickInformation}>
        {props.info.name}
      </button>
      {/* <Information infoList={infoList} /> */}
    </li>
  );
};

export default ProfileInfoList;
