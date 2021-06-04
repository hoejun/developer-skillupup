import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DataProvider } from '../recoil/atom';

const IndicatorButton = () => {
  const jsonData = useRecoilValue(DataProvider);
  jsonData.setFields();
  dataProvider.setFields(Field); //헤더 부분
  dataProvider.setRows(Row);
  gridView.setColumns(Column); //실제 들어가는 데이터
  const setIndicatorInvisible = () => {
    // gridView.setRowIndicator({
    //   visible: false,
    // });
  };

  // gridView.setRowIndicator({
  //   visible: true,
  // });
  return (
    <div>
      {/* <button onclick='setIndicatorInvisible'>표시하지 않음</button>
      <button onclick='setIndicatorVisible'>표시</button> */}
    </div>
  );
};

export default IndicatorButton;
