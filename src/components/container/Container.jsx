import PropTypes from 'prop-types';
import { useState } from 'react';
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
	border-top: 2px dashed #000;
	border-right: 2px dashed #000;
	border-left: 2px dashed #000;
	background: #f0f0f0;
`;

const ContainerInner = styled.div`
	width: 1180px;
	min-height: 20vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const DesignSelectIcon = styled.b`
	cursor: pointer;
	padding-top: 48px;
	background: url(/images/icons/ico_design_select.png) center 0 no-repeat;
	font-weight: 400;
	font-size: 20px;
	color: #989898;
`;

const Container = ({ container, index }) => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);
	console.log(showMenu);

	return (
		<StyledContainer
			key={container.id}
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<ContainerInner>
				{container.type === 'one_row_layout' ? (
					<OneRowLayout container={container} />
				) : container.type === 'two_row_layout' ? (
					<TwoRowLayout container={container} />
				) : container.type === 'three_row_layout' ? (
					<ThreeRowLayout container={container} />
				) : container.type === 'four_row_layout' ? (
					<FourRowLayout container={container} />
				) : (
					<DesignSelectIcon
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
					</DesignSelectIcon>
				)}
				{showMenu ? <QuickMenu containerId={container.id} /> : null}
				<Button
					type={'button'}
					onClick={(e) => {
						e.stopPropagation();
						dispatch(addContainer(index + 1));
					}}
					style={{
						position: 'absolute',
						left: '50%',
						bottom: '-27px',
						transform: 'translateX(-50%)',
						zIndex: 2,
						background: '#565656',
						borderRadius: '42px',
						width: '206px',
						lineHeight: '54px',
						textAlign: 'center',
						fontSize: '18px',
						fontWeight: '300',
						color: '#fff',
						padding: '0',
						height: '54px',
						cursor: 'pointer',
					}}
				>
					+ 여기에 블록 추가
				</Button>
			</ContainerInner>
		</StyledContainer>
	);
};

export default Container;

Container.propTypes = {
	container: PropTypes.object,
	index: PropTypes.number,
};
