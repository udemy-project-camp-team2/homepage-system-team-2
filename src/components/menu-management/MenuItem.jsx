/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({
	item,
	selectedItem,
	handleItemDelete,
	handleItemDetails,
	handleTitleChange,
	handleLinkChange,
	handleItemUpdate,
}) => {
	return (
		<li key={item.id}>
			{/* 항목 제목과 아이콘 */}
			<ItemTitle>{item.title}</ItemTitle>
			<IconWrapper>
				{/* 항목 세부 정보 보기 아이콘 */}
				<FontAwesomeIcon
					icon={faGear}
					onClick={() => handleItemDetails(item.id, item.title, item.link)}
				/>
				{/* 항목 삭제 버튼 */}
				<FontAwesomeIcon icon={faTimes} onClick={handleItemDelete} />
			</IconWrapper>
			{/* 항목 수정 폼 */}
			{selectedItem && selectedItem.id === item.id && (
				<ItemDetails>
					<InputTitle
						type="text"
						value={selectedItem.title}
						onChange={handleTitleChange}
					/>
					<InputLink
						type="text"
						value={selectedItem.link}
						onChange={handleLinkChange}
					/>
					<button onClick={handleItemUpdate}>확인</button>
				</ItemDetails>
			)}
		</li>
	);
};

const ItemTitle = styled.span`
	cursor: pointer;
`;

const IconWrapper = styled.span`
	cursor: pointer;
	margin-left: 5px;
`;

const ItemDetails = styled.div`
	padding: 10px;
	border: 1px solid #ccc;
	margin-top: 10px;
`;

const InputTitle = styled.input`
	margin-bottom: 5px;
	width: 100%;
	padding: 5px;
	font-size: 14px;
	border: 1px solid #ccc;
`;

const InputLink = styled.input`
	margin-bottom: 5px;
	width: 100%;
	padding: 5px;
	font-size: 14px;
	border: 1px solid #ccc;
`;

export default MenuItem;
