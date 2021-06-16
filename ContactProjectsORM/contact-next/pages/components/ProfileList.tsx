import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  searchState,
  profileState,
  responseState,
  informationState,
} from '../recoil/recoilAPI';
import { IProfile } from '../type/interfaces';
import { requests } from '../config/api';

//함수 타입에 인터페이스를 사용하는 경우 인터페이스 다입티 선언된 파라미터 리스트와 리턴 타입을 정의해주어야 한다
const ProfileList = () => {
  const setProfile = useSetRecoilState<IProfile[]>(profileState);
  const setInformation =
    useSetRecoilState<IProfile | undefined>(informationState);
  const search = useRecoilValue(searchState);
  const responseValue = useRecoilValue<IProfile[]>(responseState);

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
