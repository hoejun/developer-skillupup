import { searchState, profileState, responseState } from '../recoil/atom';
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from 'recoil';
import { IProfile } from '../type/index';
import '../config/i18n';

const ProfileList = () => {
  const response = useRecoilValueLoadable<object>(responseState);
  const search = useRecoilValue(searchState);
  const setProfile = useSetRecoilState<object>(profileState);
  const { state } = response;

  switch (state) {
    case 'hasValue':
      // const {
      //   contents: [data],
      // } = response;
      return (
        <div className='contact-list'>
          <ul>
            {!response.contents.length ? (
              <li>비어있음</li>
            ) : (
              response.contents.map((item: any) => {
                return item.name.indexOf(search) === -1 ? (
                  false
                ) : (
                  <li key={item.id}>
                    <button
                      type='button'
                      className='selected'
                      onClick={() => setProfile(item)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })
            )}
            {/* response.contents.map((item: any) => (
                 <li key={item.id}>
                   <button
                     type='button'
                     className='selected'
                     // onClick={() => setInformationRecoil(item)}
                   >
                     {item.name}
                   </button>
                 </li>
              )) */}
          </ul>
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>There is some problem.</div>;
  }
};

export default ProfileList;
