import { atom } from 'recoil';

const DataProvider = atom({
  key: 'DataProvider',
  default: [],
});
const ButtonState = atom({
  key: 'ButtonState',
  default: [],
});

const jsonState = atom({
  key: 'jsonState',
  default: [],
});

// const infoState = atom({
//   key: 'infoState',
//   default: [],
// });

export { DataProvider, ButtonState, jsonState };
