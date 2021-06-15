import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  searchState,
  profileState,
  responseState,
  informationState,
} from '../recoil/recoilAPI';
import { IProfile } from '../type/index';
import { requests } from '../config/api';

const ProfileList = () => {
  const setProfile = useSetRecoilState<IProfile[]>(profileState);
  const setInformation =
    useSetRecoilState<IProfile | undefined>(informationState);
  const search = useRecoilValue(searchState);
  const responseValue = useRecoilValue(responseState);

  useEffect(() => {
    requests
      .get('user')
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='contact-list'>
      <ul>
        {!responseValue.length ? (
          <li>비어있음 </li>
        ) : (
          responseValue.map((item: any) => {
            return item.name.indexOf(search) === -1 ? (
              false
            ) : (
              <li key={item.id}>
                <button
                  type='button'
                  className='selected'
                  onClick={() => setInformation(item)}
                >
                  {item.name}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ProfileList;
