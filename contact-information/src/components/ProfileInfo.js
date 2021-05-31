import React from 'react';
import ProfileInfoList from './ProfileInfoList';
import '../App.css';

const ProfileInfo = (props) => {
  const onHandleButton = (data) => {
    props.onHandleButton(data);
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
              onHandleButton={onHandleButton}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ProfileInfo;
