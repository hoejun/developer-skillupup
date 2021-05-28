import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { jsonState } from './recoil/atom';
import AddressData from './data/address.json';
import { Search, ProfileList, Information } from './components/route/route';
import './App.css';

function App() {
  // const [jsonData, setJsonData] = useRecoilState(jsonState);
  const setJsonData = useSetRecoilState(jsonState);

  // const getData = () => {
  //   setJsonData(AddressData);
  // };
  useEffect(() => {
    // getData();
    setJsonData(AddressData);
  });

  return (
    <div className='container'>
      <h1 className='subject'>홍길동의 연락처</h1>
      <div className='contact-wrap'>
        <div className='col left'>
          <Search />
          <ProfileList />
        </div>
        <div className='col right'>
          <Information />
        </div>
      </div>
    </div>
  );
}

export default App;
