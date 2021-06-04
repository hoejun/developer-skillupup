import React, { Component, useCallback, useEffect } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
// import { columns, fields, rows } from './data/realgrid-data';
import { DataProvider } from './recoil/atom';
import { Field, Column, Row } from './data/route';
// import IndicatorButton from './components/IndicatorButton';
import { useSetRecoilState } from 'recoil';
import { getDefaultNormalizer } from '@testing-library/dom';

//정해진 도메인만 써야함
//sudo vi /private/etc/hosts
//그리드 기능 중에 소팅을 많이 씀,....
// class App extends Component {
//   componentDidMount() {
//     //데이터 셋팅
//     this.dataProvider = new LocalDataProvider(false);
//     //보이는 거
//     this.gridView = new GridView('realgrid');
//     this.gridView.setDataSource(this.dataProvider);
//     // 필드 생성
//     this.dataProvider.setFields(fields); //헤더 부분
//     // 컬럼 생성
//     this.gridView.setColumns(columns); //실제 들어가는 데이터
//     // 데이터 채우기
//     this.dataProvider.setRows(rows);
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h2>RealGrid2 React Sample</h2>
//         <div id='realgrid' style={{ height: 400 }}></div>
//       </div>
//     );
//   }
// }

function App() {
  // const setDataState = useSetRecoilState(DataProvider);

  useEffect(() => {
    const dataProvider = new LocalDataProvider(false);
    const gridView = new GridView('realgrid');
    gridView.setDataSource(dataProvider);

    // setDataState(dataProvider);
    dataProvider.setFields(Field); //헤더 부분
    dataProvider.setRows(Row);
    gridView.setColumns(Column); //실제 들어가는 데이터
  }, []);

  return (
    <div className='App'>
      <h2>RealGrid2 React dSample</h2>
      {/* <IndicatorButton /> */}
      <div id='realgrid' style={{ height: 400 }}></div>
    </div>
  );
}

export default App;
