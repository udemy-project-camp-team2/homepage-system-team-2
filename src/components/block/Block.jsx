import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleModal } from '../../store/slices/modalSlice';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import { useCallback } from 'react';
import Image from '../image/Image';

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
	const design = useSelector((state) => state.design[id]);
	const dispatch = useDispatch();

	const designModalHandler = useCallback(() => {
		dispatch(
			toggleModal({
				name: 'design',
			})
		);
		dispatch(updateSelectedId(id));
	}, [id]);

	console.log(design);

	return (
		<StyledBlock
			id={id}
			style={style}
			onClick={(e) => {
				e.stopPropagation();
				console.log(id);
			}}
		>
			{design ? (
				design.designIds.map((designId) => (
					<Image key={designId} designId={designId} />
				))
			) : (
				<b style={{ cursor: 'pointer' }} onClick={designModalHandler}>
					디자인을 선택해주세요!
				</b>
			)}
		</StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
