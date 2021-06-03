import { useEffect } from 'react';
import '../App.css';
import addressData from '../data/address.json';
import { searchState, profileState, informationState } from '../recoil/atom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { IInformation } from '../type/index';

const ProfileList = () => {
  const [profileRecoil, setProfileRecoil] =
    useRecoilState<IInformation[]>(profileState);
  const searchRecoil = useRecoilValue(searchState);
  const setInformationRecoil =
    useSetRecoilState<IInformation | undefined>(informationState);

  useEffect(() => {
    setProfileRecoil(addressData);
  });

  return (
    <div className='contact-list'>
      <ul>
        {profileRecoil.map((item) => {
          return item.name.indexOf(searchRecoil) === -1 ? (
            false
          ) : (
            <li key={item.id}>
              <button
                type='button'
                className='selected'
                onClick={() => setInformationRecoil(item)}
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
