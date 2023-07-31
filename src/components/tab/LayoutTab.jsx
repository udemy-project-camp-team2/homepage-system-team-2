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
import { toggleModal } from '../../store/slices/modalSlice';
import { useState } from 'react';
import CommonLayout from '../models/layouts/CommonLayout';
import { layoutLists } from '../../libs/layout-lists';

const StyledLayoutTab = styled.div`
	padding: 0;
	height: 80vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1rem;
`;

const LayoutTab = () => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.value);
	const [layoutType, setLayoutType] = useState({
		id: '',
		type: '',
		length: 0,
	});

	return (
		<Fragment>
			<StyledLayoutTab>
				{/* {layoutLists.map((list) => (
					<CommonLayout
						key={list.id}
						listData={{ type: list.type, length: list.length }}
						onClick={() =>
							setLayoutType((prev) => ({
								...prev,
								id: selectedId,
								type: list.type,
								length: list.length,
							}))
						}
					/>
				))} */}
				<OneRowLayout
					onClick={() =>
						setLayoutType((prev) => ({
							...prev,
							id: selectedId,
							type: 'one_row_layout',
							length: 1,
						}))
					}
				/>
				<TwoRowLayout
					onClick={() =>
						setLayoutType((prev) => ({
							...prev,
							id: selectedId,
							type: 'two_row_layout',
							length: 2,
						}))
					}
				/>
				<FourRowLayout
					onClick={() =>
						setLayoutType((prev) => ({
							...prev,
							id: selectedId,
							type: 'four_row_layout',
							length: 4,
						}))
					}
				/>
				<FourMixLayout
					onClick={() =>
						setLayoutType((prev) => ({
							...prev,
							id: selectedId,
							type: 'four_mix_layout',
							length: 4,
						}))
					}
				/>
				<ThreeMixLayout
					onClick={() =>
						setLayoutType((prev) => ({
							...prev,
							id: selectedId,
							type: 'three_row_layout',
							length: 3,
						}))
					}
				/>
			</StyledLayoutTab>
			<Button
				type="button"
				style={{ width: '100%' }}
				onClick={() => {
					dispatch(updateLayoutType(layoutType));
					dispatch(toggleModal());
				}}
			>
				저장
			</Button>
		</Fragment>
	);
};

export default LayoutTab;
