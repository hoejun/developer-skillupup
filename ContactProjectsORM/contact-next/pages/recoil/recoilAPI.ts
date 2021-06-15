import { atom, selector } from 'recoil';
import { IProfile } from '../type/index';

//검색
const searchState = atom<string>({
  key: 'searchState',
  default: '',
});

//get List
const profileState = atom<IProfile[]>({
  key: 'profileState',
  default: [],
});

const informationState = atom<IProfile | undefined>({
  key: 'informationState',
  default: undefined,
});

const responseState = selector<IProfile[]>({
  key: 'responseState',
  get: ({ get }) => {
    const profileValueState = get(profileState);

    return profileValueState;
  },

  //set은 첫번째 인자로 객체, 두번째 인자로 새로운 값이 넘어온다. 그리고 바뀔 값을 넘겨준다.
  set: ({ set }, newValue) => {
    set(profileState, newValue);
  },
});

export { searchState, profileState, informationState, responseState };
