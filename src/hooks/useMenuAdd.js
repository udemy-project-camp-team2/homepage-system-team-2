import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMenuItem } from '../store/menu/menuReducer';
import useItemDetails from './useItemDetails'; 

const useMenuAdd = () => {
  const dispatch = useDispatch();
  const { handleItemDetails } = useItemDetails();

  // 메뉴 항목 추가 처리 함수
  const handleMenuAdd = (menu) => {
    const newItem = {
      id: uuidv4(),
      title: '새로운 항목',
      link: '/new-link',
    };

    dispatch(addMenuItem(menu, newItem));
    handleItemDetails(newItem.id, newItem.title, newItem.link);
  };

  return {
    handleMenuAdd,
  };
};

export default useMenuAdd;
