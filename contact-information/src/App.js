import React, { useState, useEffect } from 'react';
import AddressData from './data/address.json';
import Search from './components/Search';
import ProfileInfo from './components/ProfileInfo';
import Information from './components/Information';
import './App.css';

function App() {
  //test
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [infoList, setInfoList] = useState([]);

  const getData = () => {
    setData(AddressData);
  };
  useEffect(() => {
    getData();
  }, []);

  const onHandleInput = (data) => {
    setInputValue(data); //Search컴포넌트에서 받아온 데이터
  };

  const onHandleButton = (data) => {
    setInfoList(data);
  };
  return (
    <div className='container'>
      <h1 className='subject'>홍길동의 연락처</h1>
      {/* <!-- 전체 --> */}
      <div className='contact-wrap'>
        {/* <!-- 왼쪽 정보 --> */}
        <div className='col left'>
          {/* <!-- 검색 정보 --> */}
          <Search inputValue={inputValue} onHandleInput={onHandleInput} />
          <ProfileInfo
            data={data}
            inputValue={inputValue}
            onHandleButton={onHandleButton}
          />
        </div>
        {/* <!-- 클릭했을때 정보 --> */}
        <div className='col right'>
          <Information infoList={infoList} />
        </div>
      </div>
    </div>
  );
}

export default App;
