import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import QuickMenu from './QuickMenu';
import ContainerLayout from '../container/ContainerLayout';
import {
	addContainer,
	removeContainer,
} from '../../store/slices/containerSlice';

const StyledContainer = styled.article`
	min-height: 30vh;
	border: 1px dashed ${(props) => props.theme.colors.gray.darker};
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
			{container.type ? (
				<ContainerLayout containerId={container.id} type={container.type} />
			) : null}
			{showMenu ? <QuickMenu /> : null}
			<Button type={'button'} onClick={() => dispatch(addContainer(index + 1))}>
				블록 추가
			</Button>
			<Button
				type={'button'}
				onClick={() => dispatch(removeContainer(container.id))}
			>
				블록 삭제
			</Button>
		</StyledContainer>
	);
};

export default Container;

Container.propTypes = {
	container: PropTypes.object,
	index: PropTypes.number,
};
