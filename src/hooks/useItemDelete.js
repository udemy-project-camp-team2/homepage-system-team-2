import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/menu/menuReducer';

const useItemDelete = () => {
  const dispatch = useDispatch();

  // 항목 삭제 처리 함수
  const handleItemDelete = (menu, id, title) => {
    dispatch(deleteItem(menu, id, title));
  };
  
  return {
    handleItemDelete,
  };
};

export default useItemDelete;
