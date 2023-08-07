import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../store/menu/menuReducer';

const useItemDetails = () => {
	const [selectedItem, setSelectedItem] = useState(null);
	const currentMenuLists = useSelector((state) => state.menu.data);
	const dispatch = useDispatch();

	// 항목 세부 정보 보기 처리 함수
	const handleItemDetails = (id, title, link) => {
		setSelectedItem((prevSelectedItem) => {
			if (prevSelectedItem && prevSelectedItem.id === id) {
				return { ...prevSelectedItem };
			} else {
				return { id, title, link };
			}
		});
	};

	// 항목 제목 변경 처리 함수
	const handleTitleChange = (e) => {
		setSelectedItem((prevSelectedItem) => ({
			...prevSelectedItem,
			title: e.target.value,
		}));
	};

	// 항목 링크 변경 처리 함수
	const handleLinkChange = (e) => {
		setSelectedItem((prevSelectedItem) => ({
			...prevSelectedItem,
			link: e.target.value,
		}));
	};

	// 항목 수정 확인 처리 함수
	const handleItemUpdate = () => {
		if (!selectedItem) return; // 수정 중인 아이템이 없으면 종료

		const { id, title } = selectedItem;
		const menu = Object.keys(currentMenuLists).find((menu) =>
			currentMenuLists[menu].some((item) => item.id === selectedItem.id)
		);

		dispatch(
			updateItem(menu, id, title, selectedItem.title, selectedItem.link)
		);
		setSelectedItem(null);
	};

	return {
		selectedItem,
		handleItemDetails,
		handleTitleChange,
		handleLinkChange,
		handleItemUpdate,
	};
};

export default useItemDetails;
