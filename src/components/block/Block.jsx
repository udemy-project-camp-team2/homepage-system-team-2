import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateSelectedId } from '../../store/slices/selectedIdSlice';
import Image from '../image/Image';

const StyledBlock = styled.div(({ style }) => ({
	...style,
	width: '100%',
	dispaly: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const Block = ({ id, style }) => {
	const dispatch = useDispatch();

	return (
		<StyledBlock
			id={id}
			style={style}
			onClick={(e) => {
				e.stopPropagation();
				dispatch(
					updateSelectedId({
						id,
						name: 'block',
					})
				);
			}}
		></StyledBlock>
	);
};

export default Block;

Block.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
};
