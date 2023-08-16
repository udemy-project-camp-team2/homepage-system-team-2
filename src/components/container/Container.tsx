import { useState, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../store/hooks';
import { addContainer } from '../../store/slices/containerSlice';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import Button from '../common/Button';
import QuickMenu from '../common/QuickMenu';
import OneRowLayout from '../models/layouts/OneRowLayout';
import TwoRowLayout from '../models/layouts/TwoRowLayout';
import ThreeRowLayout from '../models/layouts/ThreeRowLayout';
import FourRowLayout from '../models/layouts/FourRowLayout';

interface ContainerProps {
	container: {
		id: string;
		type: string;
		blocksIds: string[];
	};
	index: number;
}

const StyledContainer = styled.article`
	min-height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: 2px dashed #000;
`;

const Container = ({ container, index }: ContainerProps) => {
	const dispatch = useDispatch();
	const [showMenu] = useState(false);

	return (
		<StyledContainer key={container.id}>
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
			{showMenu ? <QuickMenu containerId={container.id} /> : null}
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
