import { useRecoilState } from 'recoil';
import { profileState } from '../recoil/atom';
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
    setProfileRecoil(profileRecoil.filter((info) => info.name !== '울산'));
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
