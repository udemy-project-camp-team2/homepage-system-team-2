import { useDispatch } from 'react-redux';
import { updateMenuTitle } from '../store/menu/menuReducer';

const useMenuTitleChange = () => {
  const dispatch = useDispatch();

  // 메뉴 이름 변경 처리 함수
  const handleMenuTitleChange = (menu, updatedTitle) => {
    dispatch(updateMenuTitle(menu, updatedTitle));
  };

  return { handleMenuTitleChange };
};

export default useMenuTitleChange;
