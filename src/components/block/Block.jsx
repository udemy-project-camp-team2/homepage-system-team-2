import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import { useCallback } from 'react';

const StyledBlock = styled.div(({ style }) => ({
	...style,
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '1px solid teal',
}));

const Block = ({ id, style }) => {
	const dispatch = useDispatch();

	const designModalHandler = useCallback(() => {
		dispatch(
			toggleModal({
				name: 'design',
			})
		);
		dispatch(updateSelectedId(id));
	}, [id]);

	return (
		<StyledBlock
			id={id}
			style={style}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<b style={{ cursor: 'pointer' }} onClick={designModalHandler}>
				디자인을 선택해주세요!
			</b>
		</StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
