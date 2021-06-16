import { useSetRecoilState } from 'recoil';
import { profileState } from '../../recoil/recoilAPI';
import { requests } from '../../config/api';
import { IProfile } from '../../type/interfaces';

interface IProfileProps {
  contents: IProfile;
}

const RemoveButton = ({ contents }: IProfileProps) => {
  const setProfile = useSetRecoilState<IProfile[]>(profileState);

  const onHandleRemove = () => {
    requests
      .delete(`user/${contents.id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
