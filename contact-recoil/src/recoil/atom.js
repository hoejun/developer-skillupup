import { atom } from 'recoil';

const ProfileInfoState = atom({
  key: 'ProfileInfoState',
  default: [],
});

const jsonState = atom({
  key: 'jsonState',
  default: [],
});

const infoState = atom({
  key: 'infoState',
  default: [],
});

export { ProfileInfoState, jsonState, infoState };
