import { useRecoilValue } from 'recoil';
import { informationState } from '../recoil/atom';
import { IInformation } from '../type/index';
import '../App.css';

const Information = () => {
  const informationRecoil =
    useRecoilValue<IInformation | undefined>(informationState);

  return (
    <div className='details'>
      {informationRecoil ? (
        <ul className='info'>
          <li>이름: {informationRecoil.name}</li>
          <li>나이: {informationRecoil.age}</li>
          <li>주소: {informationRecoil.address}</li>
          <li>연락처: {informationRecoil.number}</li>
        </ul>
      ) : (
        <p className='emptyset'>정보가 없습니다.</p>
      )}
    </div>
  );
};

export default Information;
