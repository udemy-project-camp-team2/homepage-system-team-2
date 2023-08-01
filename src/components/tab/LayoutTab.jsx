import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateLayoutType } from '../../store/slices/containerSlice';
import FourMixLayout from '../models/layouts/FourMixlayout';
import FourRowLayout from '../models/layouts/FourRowLayout';
import OneRowLayout from '../models/layouts/OneRowLayout';
import ThreeMixLayout from '../models/layouts/ThreeMixLayout';
import TwoRowLayout from '../models/layouts/TwoRowLayout';
import { Fragment } from 'react';

const StyledLayoutTab = styled.div`
	padding: 0;
	height: 80vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

const LayoutTab = () => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.value);

	return (
		<Fragment>
			<OneRowLayout
				onClick={() =>
					dispatch(
						updateLayoutType({
							id: selectedId,
							type: 'one_row_layout',
							length: 1,
						})
					)
				}
			/>
			<TwoRowLayout
				onClick={() =>
					dispatch(
						updateLayoutType({
							id: selectedId,
							type: 'two_row_layout',
							length: 2,
						})
					)
				}
			/>
			<FourRowLayout
				onClick={() =>
					dispatch(
						updateLayoutType({
							id: selectedId,
							type: 'four_row_layout',
							length: 4,
						})
					)
				}
			/>
			<FourMixLayout
				onClick={() =>
					dispatch(
						updateLayoutType({
							id: selectedId,
							type: 'four_mix_layout',
							length: 4,
						})
					)
				}
			/>
			<ThreeMixLayout
				onClick={() =>
					dispatch(
						updateLayoutType({
							id: selectedId,
							type: 'three_mix_layout',
							length: 3,
						})
					)
				}
			/>
		</Fragment>
	);
};

export default LayoutTab;
