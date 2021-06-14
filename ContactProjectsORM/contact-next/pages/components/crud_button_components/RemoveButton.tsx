import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from 'recoil';
import { cardState, deleteProducts } from '../../recoil/atom';
import axios from 'axios';
import '../../config/i18n';

const RemoveButton = (id) => {
  const [card, setCard] = useRecoilState<number>(cardState);
  const onHandleRemove = () => {
    axios
      .delete(`http://localhost:3000/user/${id.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
