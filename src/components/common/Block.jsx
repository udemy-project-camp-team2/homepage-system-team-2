import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBlock, removeBlock } from '../../store/slices/blockSlice';
import { useState } from 'react';
import styled from 'styled-components';
import QuickMenu from './QuickMenu';
import ContainerLayout from '../container/ContainerLayout';

const StyledBlock = styled.article`
	min-height: 30vh;
	border: 1px dashed ${(props) => props.theme.colors.gray.darker};
`;

const Block = ({ block, index }) => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<StyledBlock
			key={block.id}
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			{block.type ? <ContainerLayout type={block.type} /> : null}
			{showMenu ? <QuickMenu /> : null}
			<Button type={'button'} onClick={() => dispatch(addBlock(index + 1))}>
				블록 추가
			</Button>
			<Button type={'button'} onClick={() => dispatch(removeBlock(block.id))}>
				블록 삭제
			</Button>
		</StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	block: PropTypes.object,
	index: PropTypes.number,
};
