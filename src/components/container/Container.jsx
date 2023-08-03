import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addContainer } from '../../store/slices/containerSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice.js';
import Button from '../common/Button';
import QuickMenu from '../common/QuickMenu';
import OneRowLayout from '../models/layouts/OneRowLayout';
import TwoRowLayout from '../models/layouts/TwoRowLayout';
import FourRowLayout from '../models/layouts/FourRowLayout';
import FourMixLayout from '../models/layouts/FourMixlayout';
import ThreeMixLayout from '../models/layouts/ThreeMixLayout';

const StyledContainer = styled.article`
	height: 40vh;
	position: relative;
	border: ${(props) => props.$border};
`;

const Container = ({ container, index }) => {
	const dispatch = useDispatch();
	const selectedId = useSelector((state) => state.selectedId.value);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<StyledContainer
			key={container.id}
			onClick={() =>
				dispatch(
					updateSelectedId({
						id: container.id,
						name: 'container',
					})
				)
			}
			// onMouseEnter={() => setShowMenu(true)}
			// onMouseLeave={() => setShowMenu(false)}
			$border={
				container.id === selectedId ? '3px solid #ff0000' : '1px dashed #000'
			}
		>
			{container.type === 'one_row_layout' ? (
				<OneRowLayout container={container} />
			) : container.type === 'two_row_layout' ? (
				<TwoRowLayout container={container} />
			) : container.type === 'four_row_layout' ? (
				<FourRowLayout container={container} />
			) : container.type === 'three_mix_layout' ? (
				<ThreeMixLayout container={container} />
			) : container.type === 'four_mix_layout' ? (
				<FourMixLayout container={container} />
			) : null}
			{showMenu ? <QuickMenu /> : null}
			<Button
				type={'button'}
				onClick={(e) => {
					e.stopPropagation();
					dispatch(addContainer(index + 1));
				}}
				style={{
					position: 'absolute',
					bottom: '-.7rem',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				컨테이너 추가
			</Button>
			<QuickMenu containerId={container.id} />
		</StyledContainer>
	);
};

export default Container;

Container.propTypes = {
	container: PropTypes.object,
	index: PropTypes.number,
};
