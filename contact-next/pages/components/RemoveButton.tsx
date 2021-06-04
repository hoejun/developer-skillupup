import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { profileState, informationState } from '../recoil/atom';
import { IInformation } from '../type/index';

const RemoveButton = (data: any) => {
  // const profileRecoil = useRecoilValue<IInformation[]>(profileState);
  // const informationRecoil =
  //   useRecoilValue<IInformation | undefined>(informationState);
  const [profileRecoil, setProfileRecoil] =
    useRecoilState<IInformation[]>(profileState);
  // const [informationRecoil, setInformationRecoil] =
  //   useRecoilState<IInformation | undefined>(informationState);
  const onHandleRemove = () => {
    // console.log(data.data.id);
    // console.log(profileRecoil.filter((info) => info.id !== data.id));
    setProfileRecoil(profileRecoil.filter((info) => info.name !== '울산'));
    console.log(profileRecoil);
    // setProfileRecoil(profileRecoil.filter((info) => info.id !== 1));
  };
  return (
    <div>
      <button type='button' onClick={onHandleRemove}>
        삭제
      </button>
    </div>
  );
};

export default RemoveButton;
