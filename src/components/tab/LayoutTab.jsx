import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateLayoutType } from '../../store/slices/containerSlice';
import { toggleModal } from '../../store/slices/modalSlice';
import { layoutLists } from '../../libs/layout-lists';
import Button from '../common/Button';

const LayoutList = styled.ul`
	padding: 0;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 200px;
	gap: 0.5rem;
`;

const LayoutItem = styled.li`
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	cursor: pointer;
`;

const LayoutImg = styled.img`
	width: 100%;
	height: 100%;
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

const ModalContainer = styled.div`
	padding: 60px;
	background: #f3f3f3;
	overflow: hidden;
`;

const LayoutTab = ({ onClose }) => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.selectedId);
	const [layoutType, setLayoutType] = useState({
		id: '',
		type: '',
		length: 0,
	});

	return (
		<Fragment>
			<ModalHeader>
				<HeadTitle>블록 레이아웃 추가</HeadTitle>
				<BtnClose
					onClick={() => {
						onClose();
					}}
				>
					닫기
				</BtnClose>
			</ModalHeader>
			<ModalContainer>
				<LayoutList>
					{layoutLists.map((list) => (
						<LayoutItem
							key={list.id}
							onClick={() =>
								setLayoutType({
									id: selectedId,
									type: list.type,
									length: list.length,
								})
							}
						>
							<LayoutImg src={list.src} alt={list.type} />
						</LayoutItem>
					))}
				</LayoutList>
				<Button
					type="button"
					style={{
						width: '100px',
						borderRadius: '10px',
						background: '#565656',
						color: '#fff',
						border: 'none',
						lineHeight: '30px',
						fontSize: '15px',
						flat: 'right',
						marginTop: '20px',
					}}
					onClick={() => {
						dispatch(updateLayoutType(layoutType));
						dispatch(
							toggleModal({
								name: '',
							})
						);
					}}
				>
					저장
				</Button>
			</ModalContainer>
		</Fragment>
	);
};

export default LayoutTab;

LayoutTab.propTypes = {
	onClose: PropTypes.func,
};
