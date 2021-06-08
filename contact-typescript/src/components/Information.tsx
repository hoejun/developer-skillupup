import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { informationState, profileState } from '../recoil/atom';
import { IInformation } from '../type/index';
import '../App.css';

const Information = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState<IInformation>({
    id: 0,
    name: '',
    age: 0,
    address: '',
    number: '',
  });

  const [informationRecoil, setInformationRecoil] =
    useRecoilState<IInformation | undefined>(informationState);
  const [profileRecoil, setProfileRecoil] =
    useRecoilState<IInformation[]>(profileState);

  const { name, age, address, number } = text;

  const onHandleChange = (e: any) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const onHandleToggle = (info: any) => {
    setText({
      id: info.id,
      name: info.name,
      age: info.age,
      address: info.address,
      number: info.number,
    });
    if (!toggle) {
      setToggle(true);
    } else {
      // const newFilter = profileRecoil.filter((item) => item.id === info.id);
      setProfileRecoil(
        profileRecoil.map((user: IInformation) =>
          user.id === info.id
            ? {
                id: text.id,
                name: text.name,
                age: text.age,
                address: text.address,
                number: text.number,
              }
            : user
        )
      );
      setToggle(false);
    }
  };
  return (
    <div className='details'>
      {informationRecoil ? (
        <ul className='info'>
          <li>이름: {informationRecoil.name}</li>
          <li>나이: {informationRecoil.age}</li>
          <li>주소: {informationRecoil.address}</li>
          <li>연락처: {informationRecoil.number}</li>
          <div>
            {toggle ? (
              <div>
                <input onChange={onHandleChange} value={name} name='name' />
                <input onChange={onHandleChange} value={age} name='age' />
                <input
                  onChange={onHandleChange}
                  value={address}
                  name='address'
                />
                <input onChange={onHandleChange} value={number} name='number' />
              </div>
            ) : (
              false
            )}
            <button
              type='submit'
              onClick={() => onHandleToggle(informationRecoil)}
            >
              {toggle ? '완료' : '수정'}
            </button>
          </div>
        </ul>
      ) : (
        <p className='emptyset'>정보가 없습니다.</p>
      )}
    </div>
  );
};

export default Information;
