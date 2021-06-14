import { atom, selector } from 'recoil';
import axios, { AxiosResponse } from 'axios';
import { IProfile } from '../type/index';

//리코일에서는 api를 관리 하면 복잡해짐..
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

//검색
const searchState = atom<string>({
  key: 'searchState',
  default: '',
});

const profileState = atom<object>({
  key: 'profileState',
  default: [],
});

const cardState = atom<number>({
  key: 'cardState',
  default: 0,
});

const responseState = selector({
  key: 'responseState',
  //get은 함수를 전달해줘야한다. 전달해야하는 값은 recoil state 값이다.
  get: ({ get }) => {
    // const profileValueState = get(profileState);
    const data = requests;

    return data.get('user');

    // switch (Object.keys(profileValueState).length) {
    //   case Object.keys(profileValueState).length:
    //     return await data.get('user');
    // }

    // try {
    //   const data = await requests.get('user');

    //   return data;
    // } catch (error) {
    //   throw error;
    // }
  },
});

const deleteProducts = selector({
  key: 'deleteProducts',
  get: ({ get }) => {
    const data = requests;

    return data.delete('user');
  },

  //set은 첫번째 인자로 객체, 두번째 인자로 새로운 값이 넘어온다. 그리고 바뀔 값을 넘겨준다.
  // set: ({ set }, newValue) => {
  //   set(deleteinformationState, newValue), //삭제
  // };
});
export { searchState, profileState, cardState, responseState, deleteProducts };

// axios({
//   method: 'post',
//   url: 'http://localhost:3000',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   },
// });
//별칭 메소드
// axios
//   .post('http://localhost:3000/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
