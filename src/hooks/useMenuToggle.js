import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/menu/menuReducer';

const useMenuToggle = () => {
  const expandedMenu = useSelector(state => state.menu.expandedMenu);
  const dispatch = useDispatch();

  // 메뉴 펼침/접기 토글 처리 함수
  const handleMenuToggle = (menu) => {
    dispatch(toggleMenu(menu));
  };

  return {
    expandedMenu,
    handleMenuToggle,
  };
};

export default useMenuToggle;
