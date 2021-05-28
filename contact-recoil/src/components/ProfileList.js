import React from 'react';
import '../App.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProfileInfoState, jsonState, infoState } from '../recoil/atom';

const ProfileList = () => {
  const jsonData = useRecoilValue(jsonState);
  const inputData = useRecoilValue(ProfileInfoState);
  const setInfoData = useSetRecoilState(infoState);
  // const [infoData, setInfoDatas] = useRecoilState(info);
  // const onClickInfoID = () => {
  //   setInfoDatas();
  // };

  return (
    <div className='contact-list'>
      <ul>
        {/* {jsonData.map((item, index) => {
          if (item.name.indexOf(inputData) === -1) {
            return;
          }
          return (
            <li key={index}>
              <button
                type='button'
                className='selected'
                onClick={() => setInfoData(item)}
              >
                {item.name}
              </button>
            </li>
          );
        })} */}
        {jsonData.map((item, index) => {
          return item.name.indexOf(inputData) === -1 ? (
            false
          ) : (
            <li key={index}>
              <button
                type='button'
                className='selected'
                onClick={() => setInfoData(item)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProfileList;
