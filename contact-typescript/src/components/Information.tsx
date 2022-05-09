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

  const [informationRecoil, setInformationRecoil] = useRecoilState<any>(informationState);
  const [profileRecoil, setProfileRecoil] = useRecoilState<IInformation[]>(profileState);

  // const { name, age, address, number } = text;

  const onHandleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    // console.log(informationRecoil?.id);
    // const id = 'id';
    // setText({
    //   ...text,
    //   ['id']: informationRecoil?.id,
    //   [name]: value,
    // });
    // setInformationRecoil({
    //   // ...informationRecoil,
    //   // ['id']: informationRecoil?.id,
    //   [name]: value,
    // });
    setInformationRecoil({
      ...informationRecoil,
      [name]: value,
    });
  };

  // const onHandleToggle = (info: any) => {
  const onHandleToggle = () => {
    // setText({
    //   id: info.id,
    //   name: info.name,
    //   age: info.age,
    //   address: info.address,
    //   number: info.number,
    // });
    // console.log(text.id);
    if (!toggle) {
      setToggle(true);
    } else {
      // const newFilter = profileRecoil.filter((item) => item.id === info.id);
      console.log(profileRecoil);

      setProfileRecoil(
        profileRecoil.map((user: IInformation) =>
          user.id === informationRecoil.id
            ? {
                id: informationRecoil.id,
                name: informationRecoil.name,
                age: informationRecoil.age,
                address: informationRecoil.address,
                number: informationRecoil.number,
              }
            : user
        )
      );
      setInformationRecoil(informationRecoil);
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
                {/* <input onChange={onHandleChange} value={text.name} name='name' />
                <input onChange={onHandleChange} value={text.age} name='age' />
                <input onChange={onHandleChange} value={text.address} name='address' />
                <input onChange={onHandleChange} value={text.number} name='number' /> */}
                <input onChange={onHandleChange} name={'name'} value={informationRecoil.name} />
                <input onChange={onHandleChange} name='age' value={informationRecoil.age} />
                <input onChange={onHandleChange} name='address' value={informationRecoil.address} />
                <input onChange={onHandleChange} name='number' value={informationRecoil.number} />
              </div>
            ) : (
              false
            )}
            <button
              type='submit'
              // onClick={() => onHandleToggle(informationRecoil)}
              onClick={onHandleToggle}
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
