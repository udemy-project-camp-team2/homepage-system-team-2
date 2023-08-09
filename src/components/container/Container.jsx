import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addContainer } from '../../store/slices/containerSlice';
import Button from '../common/Button';
import QuickMenu from '../common/QuickMenu';
import OneRowLayout from '../models/layouts/OneRowLayout';
import TwoRowLayout from '../models/layouts/TwoRowLayout';
import ThreeRowLayout from '../models/layouts/ThreeRowLayout';
import FourRowLayout from '../models/layouts/FourRowLayout';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';

const StyledContainer = styled.article`
	height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: 2px dashed #000;
`;

const Container = ({ container, index }) => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<StyledContainer
			key={container.id}
			// onMouseEnter={() => setShowMenu(true)}
			// onMouseLeave={() => setShowMenu(false)}
		>
			{container.type === 'one_row_layout' ? (
				<OneRowLayout container={container} />
			) : container.type === 'two_row_layout' ? (
				<TwoRowLayout container={container} />
			) : container.type === 'three_row_layout' ? (
				<ThreeRowLayout container={container} />
			) : container.type === 'four_row_layout' ? (
				<FourRowLayout container={container} />
			) : (
				<b
					style={{ cursor: 'pointer' }}
					onClick={() => {
						dispatch(
							toggleModal({
								name: 'layout',
							})
						);
						dispatch(updateSelectedId(container.id));
					}}
				>
					레이아웃을 선택하세요!
				</b>
			)}
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

export default memo(Container);

Container.propTypes = {
	container: PropTypes.object,
	index: PropTypes.number,
};
