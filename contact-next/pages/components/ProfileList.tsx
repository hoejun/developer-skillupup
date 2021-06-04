// import '../App.css';
import { searchState, profileState, informationState } from '../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IInformation } from '../type/index';
import { UpdateButton, RemoveButton } from './route/route';

const ProfileList = () => {
  const [profileRecoil, setProfileRecoil] =
    useRecoilState<IInformation[]>(profileState);
  const searchRecoil = useRecoilValue(searchState);
  // const setInformationRecoil =
  //   useSetRecoilState<IInformation | undefined>(informationState);
  const [informationRecoil, setInformationRecoil] =
    useRecoilState<IInformation | undefined>(informationState);

  //이거 때문에 랜더링이 2번 발생함.
  // useEffect(() => {
  //   setProfileRecoil(addressData);
  // });
  function removeItem(arr: any, index: any) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

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
              <button
                type='button'
                onClick={() => {
                  const newFilter = profileRecoil.filter(
                    (id) => id.id !== item.id
                  );
                  setProfileRecoil(newFilter);
                }}
              >
                삭제
              </button>
              {/* <UpdateButton />
              <RemoveButton data={item} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileList;
