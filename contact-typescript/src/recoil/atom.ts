import { atom } from 'recoil';
import { IInformation } from '../type/index';

const searchState = atom<string>({
  key: 'SearchState',
  default: '',
});

const profileState = atom<IInformation[]>({
  key: 'profileState',
  default: [],
});

const informationState = atom<IInformation | undefined>({
  key: 'informationState',
  default: undefined,
});

export { searchState, profileState, informationState };
