import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateLayoutType } from '../../store/slices/containerSlice';
import FourMixLayout from '../models/layouts/FourMixlayout';
import FourRowLayout from '../models/layouts/FourRowLayout';
import OneRowLayout from '../models/layouts/OneRowLayout';
import ThreeMixLayout from '../models/layouts/ThreeMixLayout';
import TwoRowLayout from '../models/layouts/TwoRowLayout';
import Button from '../common/Button';
import { Fragment } from 'react';
import { useState } from 'react';
import { toggleModal } from '../../store/slices/modalSlice';
import { layoutLists } from '../../libs/layout-lists';

const LayoutList = styled.ul`
	padding: 0;
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

const LayoutTab = () => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.selectedId);
	const [layoutType, setLayoutType] = useState({
		id: '',
		type: '',
		length: 0,
	});

	console.log(layoutType);

	return (
		<Fragment>
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
				style={{ width: '100%' }}
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
		</Fragment>
	);
};

export default LayoutTab;
