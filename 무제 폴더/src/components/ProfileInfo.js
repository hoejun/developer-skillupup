import React, { useState } from 'react';
import ProfileInfoList from './ProfileInfoList';
import '../App.css';

const ProfileInfo = (props) => {
  const [infoList, setInfoList] = useState([]);
  const onHandleButton = (data) => {
    setInfoList(data);
    props.onHandleButton(infoList);
  };
  return (
    <div className='contact-list'>
      <ul>
        {props.data.map((item, index) => {
          if (item.name.indexOf(props.inputValue) === -1) {
            return;
          }

          return (
            <ProfileInfoList
              info={item}
              key={index}
              value={infoList}
              onHandleButton={onHandleButton}
            />
          );
        })}

        {/* <li>
          <button type='button' className='selected'>
            김더존3 선택 예제
          </button>
        </li> */}
      </ul>
    </div>
  );
};
export default ProfileInfo;
