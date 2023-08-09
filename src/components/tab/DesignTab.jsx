import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ImageTab from './ImageTab';
import LineTab from './LineTab';
import Button from '../common/Button';
import { addDesign } from '../../store/slices/designSlice';
import { toggleModal } from '../../store/slices/modalSlice';
import TextTab from './TextTab';
import ListTab from './ListTab';

const designLists = [
	{ id: 0, label: '구분선' },
	{ id: 1, label: '이미지' },
	{ id: 2, label: '텍스트' },
	{ id: 3, label: '목록' },
];

const TabWrapper = styled.div`
	display: flex;
	padding: 50px;
	background: #f3f3f3;
`;

const TabTitleList = styled.ul`
	padding: 0;
	margin: 0 100px 0 0;
	position: relative;
`;

const TabTitleItem = styled.li`
	width: max-content;
	color: ${(props) => props.$color};
	font-weight: ${(props) => props.$fontWeight};
	cursor: pointer;
	margin-bottom: 20px;
`;

const TabContentList = styled.ul`
	width: 100%;
	padding: 0;
	margin: 0;
`;

const TabContentItem = styled.li`
	display: ${(props) => props.$display};
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 10px 10px;
`;

const ModalHeader = styled.div`
	padding: 0 62px;
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.colors.orange};
`;

const HeadTitle = styled.h1`
	margin-right: auto;
	font-size: 20px;
	color: #fff;
`;

const BtnClose = styled.button`
	margin-left: auto;
	text-indent: -9999px;
	width: 27px;
	height: 27px;
	background: url(/images/icons/ico_modal_close.png) 0 0 no-repeat;
	border: none;
	cursor: pointer;
`;

const DesignTab = ({ onClose }) => {
	const [currentTab, setCurrentTab] = useState(0);
	const dispatch = useDispatch();
	const [designType, setDesignType] = useState({
		id: '',
		type: '',
		length: 0,
	});

	return (
		<>
			<ModalHeader>
				<HeadTitle>블록 디자인 추가</HeadTitle>
				<BtnClose
					onClick={() => {
						onClose();
					}}
				>
					닫기
				</BtnClose>
			</ModalHeader>
			<TabWrapper>
				<TabTitleList>
					{designLists.map((list, index) => (
						<TabTitleItem
							key={list.id}
							$color={currentTab === index ? '#EE7D00' : '#000'}
							$fontWeight={currentTab === index ? 700 : 'normal'}
							onClick={() => setCurrentTab(index)}
						>
							{list.label}
						</TabTitleItem>
					))}
					<Button
						type={'button'}
						style={{
							width: '100%',
							position: 'absolute',
							bottom: 0,
							borderRadius: '10px',
							background: '#565656',
							color: '#fff',
							border: 'none',
							lineHeight: '30px',
							fontSize: '15px',
							cursor: 'pointer',
						}}
						onClick={() => {
							if (designType.type === '') return;
							dispatch(addDesign(designType));
							dispatch(toggleModal({ name: '' }));
						}}
					>
						저장
					</Button>
				</TabTitleList>
				<TabContentList>
					{designLists.map((list, index) => (
						<TabContentItem
							key={list.id}
							$display={currentTab === index ? 'grid' : 'none'}
						>
							{list.label === '이미지' && (
								<ImageTab setDesignType={setDesignType} />
							)}
							{list.label === '구분선' && (
								<LineTab setDesignType={setDesignType} />
							)}
							{list.label === '텍스트' && (
								<TextTab setDesignType={setDesignType} />
							)}
							{list.label === '목록' && (
								<ListTab setDesignType={setDesignType} />
							)}
						</TabContentItem>
					))}
				</TabContentList>
			</TabWrapper>
		</>
	);
};

export default DesignTab;

DesignTab.propTypes = {
	onClose: PropTypes.func,
};
