import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBlock, moveBlockUpAndDown, removeBlock } from '../../store/slices/blockSlice';
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
	
	// 컨테이너 이동
	const handleMoveUp = () => {
    dispatch(moveBlockUpAndDown({ index, direction: 'up' }));
  };

  const handleMoveDown = () => {
    dispatch(moveBlockUpAndDown({ index, direction: 'down' }));
  };

	// 컨테이너 삭제
	const handleDeleteBlock = () => {
    dispatch(removeBlock(block.id));
  };

	return (
		<StyledBlock
			key={block.id}
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			{block.type ? <ContainerLayout type={block.type} /> : null}
			{showMenu ? <QuickMenu 
				onMoveUp={handleMoveUp} 
				onMoveDown={handleMoveDown} 
				onDelete={handleDeleteBlock}/> : null
			}
			<Button type={'button'} onClick={() => dispatch(addBlock(block.id))}>
				블록 추가
			</Button>
			<p>id={block.id}</p>
		</StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	block: PropTypes.object,
	index: PropTypes.number,
};
