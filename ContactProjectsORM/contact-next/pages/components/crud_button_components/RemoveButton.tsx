import { useSetRecoilState } from 'recoil';
import { profileState, responseState } from '../../recoil/recoilAPI';
import { requests } from '../../config/api';
import { IProfile } from '../../type/index';

const RemoveButton = (id) => {
  // const setProfile = useSetRecoilState<IProfile[]>(profileState);
  const setResponseValue = useSetRecoilState(responseState);

  const onHandleRemove = () => {
    requests
      .delete(`user/${id.id}`)
      .then((res) => {
        setResponseValue(res.data);
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
